import { Design } from '@freesewing/core'
import { data } from '../data.mjs'
// Parts
import { front } from './front.mjs'
import { back } from './back.mjs'
import { sleeve } from './sleeve.mjs'
import { collar } from './collar.mjs'
import { facing } from './facing.mjs'
import { cuff } from './cuff.mjs'

// Create new design
const Turtleneck = new Design({
  data,
  parts: [back, front, sleeve, collar, facing, cuff],
})

// Named exports
export { back, front, sleeve, collar, facing, cuff, Turtleneck }
