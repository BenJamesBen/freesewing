import { Design } from '@freesewing/core'
import { data } from '../data.mjs'
// Parts
import { base } from './base.mjs'
import { sleeveGusset } from './sleeveGusset.mjs'
import { neckGusset } from './neckGusset.mjs'
import { body } from './body.mjs'
import { sleeve } from './sleeve.mjs'
import { shoulderPatch } from './shoulderPatch.mjs'

// Setup our new design
const Tortuga = new Design({
  data,
  parts: [ body, sleeve, sleeveGusset, neckGusset, shoulderPatch, ],
})

// Named exports
export { base, body, sleeveGusset, neckGusset, sleeve, shoulderPatch,
  Tortuga }
