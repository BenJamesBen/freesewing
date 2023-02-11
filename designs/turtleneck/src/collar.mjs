import { front } from './front.mjs'

function draftTurtleneckCollar({
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
  const necklineLength = store.get('necklineLength')
  const halfNecklineLength = necklineLength / 2
  const width = 60

  points.cfNeck = new Point(0, 0)
  points.neckEdge = new Point(halfNecklineLength, 0)
  points.collarEdge = new Point(halfNecklineLength, width)
  points.cfCollar = new Point(0, width)

  paths.seam = new Path()
    .move(points.cfNeck)
    .line(points.cfCollar)
    .line(points.collarEdge)
    .line(points.neckEdge)
    .line(points.cfNeck)
    .close()

  // Complete?
  if (complete) {
    // Add the title
    points.title = points.cfNeck.shiftFractionTowards(points.collarEdge, 0.6)
    macro('title', {
      at: points.title,
      nr: 4,
      title: 'collar',
      scale: 0.4,
    })

    macro('cutonfold', {
      from: points.cfNeck,
      to: points.cfCollar,
      grainline: true,
      margin: 15,
    })

    if (sa) {
      paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')
    }

    // Paperless?
    if (paperless) {
      macro('hd', {
        from: points.cfNeck,
        to: points.neckEdge,
        y: points.neckEdge.y - (sa * 3 + 15),
      })
      macro('vd', {
        from: points.neckEdge,
        to: points.collarEdge,
        x: points.neckEdge.x + (sa * 3 + 15),
      })
    }
  }

  return part
}

export const collar = {
  name: 'turtleneck.collar',
  after: front,
  draft: draftTurtleneckCollar,
}
