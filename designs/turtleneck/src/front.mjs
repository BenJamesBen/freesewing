import { front as teaganFront } from '@freesewing/teagan'

function draftTurtleneckFront({ Point, points, Path, paths, log, store, units, part }) {
  // Calculate neckline length, for collar
  const necklinePath = new Path()
    .move(points.neck)
    .curve(points.neckCp2, points.cfNeckCp1, points.cfNeck)
    .curve(points.cfNeckCp1, points.neckCp2, points.neck)
  const necklineLength = necklinePath.length()
  store.set('necklineLength', necklineLength)

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
