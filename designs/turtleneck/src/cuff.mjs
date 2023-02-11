import { sleeve } from './sleeve.mjs'

function draftTurtleneckCuff({
  Point,
  points,
  Path,
  paths,
  complete,
  sa,
  macro,
  paperless,
  log,
  store,
  units,
  part,
}) {
  const cuffEase = 10
  const cuffLength = store.get('cuffLength') + cuffEase
  const cuffWidth = 25

  points.topLeft = new Point(0, 0)
  points.topRight = new Point(cuffLength, 0)
  points.bottomRight = new Point(cuffLength, cuffWidth)
  points.bottomLeft = new Point(0, cuffWidth)

  paths.seam = new Path()
    .move(points.topLeft)
    .line(points.bottomLeft)
    .line(points.bottomRight)
    .line(points.topRight)
    .line(points.topLeft)
    .close()

  // Complete?
  if (complete) {
    // Add the title
    points.title = points.topLeft.shiftFractionTowards(points.bottomRight, 0.6)
    macro('title', {
      at: points.title,
      nr: 6,
      title: 'cuff',
      scale: 0.2,
    })

    //Grainline
    macro('grainline', {
      from: points.topLeft.shiftFractionTowards(points.bottomRight, 0.1),
      to: points.bottomLeft.shiftFractionTowards(points.topRight, 0.1),
    })
    if (sa) {
      paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')
    }

    // Paperless?
    if (paperless) {
      macro('hd', {
        from: points.topLeft,
        to: points.topRight,
        y: points.topLeft.y - (sa * 3 + 15),
      })
      macro('vd', {
        from: points.topRight,
        to: points.bottomRight,
        x: points.topRight.x + (sa * 3 + 15),
      })
    }
  }

  return part
}

export const cuff = {
  name: 'turtleneck.cuff',
  after: sleeve,
  draft: draftTurtleneckCuff,
}
