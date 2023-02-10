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

export const facing = {
  name: 'turtleneck.facing',
  after: front,
  draft: draftTurtleneckFacing,
}
