import { front } from './front.mjs'
import { back } from './back.mjs'

function draftTurtleneckCollar({
  Point,
  points,
  Path,
  paths,
  complete,
  sa,
  macro,
  paperless,
  store,
  part,
}) {
  const necklineLength = store.get('frontNecklineLength') + store.get('backNecklineLength')
  const halfNecklineLength = necklineLength / 2
  const length = halfNecklineLength

  const frontNeckDepth = store.get('frontNeckDepth')
  const backNeckDepth = store.get('backNeckDepth')
  const neckDepthDifferential = frontNeckDepth - backNeckDepth

  const frontWidth = 60
  const backWidth = 60 - neckDepthDifferential / 2

  points.cfNeck = new Point(0, 0)
  points.neckEdge = new Point(halfNecklineLength, 0)
  points.collarEdge = new Point(halfNecklineLength, backWidth)
  points.cfCollar = new Point(0, frontWidth)
  points.collarCp1 = points.cfCollar.shift(0, length * 0.25)
  points.collarCp2 = points.collarEdge
    .shift(-90, neckDepthDifferential / 4)
    .shift(180, length * 0.25)

  paths.seam = new Path()
    .move(points.cfNeck)
    .line(points.cfCollar)
    .curve(points.collarCp1, points.collarCp2, points.collarEdge)
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
  after: [front, back],
  draft: draftTurtleneckCollar,
}
