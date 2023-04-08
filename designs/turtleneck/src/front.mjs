import { front as teaganFront } from '@freesewing/teagan'

function draftTurtleneckFront({ Point, points, Path, paths, log, store, part }) {
  // Calculate neckline length and depth, for collar
  const halfNecklinePath = new Path()
    .move(points.neck)
    .curve(points.neckCp2, points.cfNeckCp1, points.cfNeck)
  const necklineLength = halfNecklinePath.length() * 2
  store.set('frontNecklineLength', necklineLength)
  store.set('frontNeckDepth', points.cfNeck.y)

  // Calculate neck to armhole, for facing
  const facingLength = points.armhole.y - points.neck.y
  store.set('facingLength', facingLength)

  return part
}

export const front = {
  name: 'turtleneck.front',
  from: teaganFront,
  hideDependencies: true,
  draft: draftTurtleneckFront,
}
