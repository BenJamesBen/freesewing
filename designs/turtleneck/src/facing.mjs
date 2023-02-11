import { front } from './front.mjs'

function draftTurtleneckFacing({
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
  const facingLength = store.get('facingLength')
  const topWidth = 100
  const bottomWidth = 65

  points.topLeft = new Point(0, 0)
  points.topRight = new Point(topWidth, 0)
  points.bottomRight = new Point(bottomWidth, facingLength)
  points.bottomLeft = new Point(0, facingLength)

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
    points.title = points.topLeft.shiftFractionTowards(points.bottomRight, 0.4)
    macro('title', {
      at: points.title,
      nr: 5,
      title: 'facing',
      scale: 0.6,
    })

    // Grainline
    points.grainlineBottom = points.bottomLeft.shiftFractionTowards(points.topRight, 0.1)
    points.grainlineTop = points.topLeft.shift(
      -points.bottomLeft.angle(points.grainlineBottom),
      points.bottomLeft.dist(points.grainlineBottom)
    )
    macro('grainline', {
      from: points.grainlineTop,
      to: points.grainlineBottom,
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
      macro('hd', {
        from: points.bottomLeft,
        to: points.bottomRight,
        y: points.bottomLeft.y + (sa * 3 + 15),
      })
      macro('vd', {
        from: points.topLeft,
        to: points.bottomLeft,
        x: points.topLeft.x - (sa * 3 + 15),
      })
    }
  }

  return part
}

export const facing = {
  name: 'turtleneck.facing',
  after: front,
  draft: draftTurtleneckFacing,
}
