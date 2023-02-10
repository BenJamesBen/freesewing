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
  const cuffLength = store.get('cuffLength')
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
    .close()

  // Complete?
  if (complete) {
    // Add the title
    points.title = points.topLeft.shiftFractionTowards(points.bottomRight, 0.4)
    macro('title', {
      at: points.title,
      nr: 6,
      title: 'cuff',
      scale: 0.3,
    })

    if (sa) {
      paths.sa = paths.seam.offset(-5).attr('class', 'fabric sa')
    }

    // Paperless?
    if (paperless) {
      // Add dimensions
    }
  }

  return part
}

export const cuff = {
  name: 'turtleneck.cuff',
  after: sleeve,
  draft: draftTurtleneckCuff,
}
