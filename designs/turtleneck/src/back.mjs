import { back as teaganBack } from '@freesewing/teagan'

function draftTurtleneckBack({ points, Path, store, part }) {
  // Calculate neckline length and depth, for collar
  const halfNecklinePath = new Path()
    .move(points.neck)
    .curve(points.neckCp2, points.cbNeckCp1, points.cbNeck)
  const necklineLength = halfNecklinePath.length() * 2
  store.set('backNecklineLength', necklineLength)
  store.set('backNeckDepth', points.cbNeck.y)

  return part
}

export const back = {
  name: 'turtleneck.back',
  from: teaganBack,
  hideDependencies: true,
  draft: draftTurtleneckBack,
}
