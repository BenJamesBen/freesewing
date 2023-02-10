import { back as teaganBack } from '@freesewing/teagan'

function draftTurtleneckBack({ part }) {
  return part
}

export const back = {
  name: 'turtleneck.back',
  from: teaganBack,
  hideDependencies: true,
  draft: draftTurtleneckBack,
}
