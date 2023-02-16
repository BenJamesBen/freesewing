//

import { Design } from '@freesewing/core'
import { data } from '../data.mjs'
// Parts
import { sloper } from './sloper.mjs'

// Create new design
const Sartemis = new Design({
  data,
  parts: [sloper],
})

// Named exports
export { sloper, Sartemis }
