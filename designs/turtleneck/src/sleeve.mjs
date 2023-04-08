import { sleeve as teaganSleeve } from '@freesewing/teagan'

function draftTurtleneckSleeve({ points, part, store }) {
  const sleeveOpening = points.hemRight.x - points.hemLeft.x
  store.set('cuffLength', sleeveOpening)

  return part
}

export const sleeve = {
  name: 'turtleneck.sleeve',
  from: teaganSleeve,
  hideDependencies: true,
  //*** BEN DEBUG START
  // This temporary code is used to "fake" a long-sleeve and will
  // be removed from the final code.
  options: {
    sleeveLength: { pct: 300, min: 20, max: 500, menu: 'style' },
    sleeveEase: { pct: -40, min: -60, max: 35, menu: 'style' },
  },
  //*** BEN DEBUG END
  draft: draftTurtleneckSleeve,
}
