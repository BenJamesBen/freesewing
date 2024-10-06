import React from 'react'
import { LineDrawingWrapper, thin, dashed } from './shared.mjs'

const strokeScale = 0.5

export const Bob = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 136 87" {...{ className, stroke }}>
      <Front stroke={stroke} />
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the front
 */
export const BobFront = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 68 87" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the back
 */
export const BobBack = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="68 0 68 87" {...{ className, stroke }}>
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * SVG elements for the front
 */
export const Front = ({ stroke }) => (
  <>
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 60.06281,7.079377 c 0.05,0.075 0.65,0.65 1.4,2.775 0.65,1.85 1.075,6.825 1.075,13.325 v 0 c 0,0 0.05,6.875 0.1,11.625 0.125,12.5 0.3,29.6 0.15,42.2 -0.05,4.15 -3.475,7.525 -7.625,7.525 h -44.075 c -4.1500001,0 -7.5750001,-3.375 -7.6250001,-7.525 -0.15,-12.6 0.025,-29.7 0.15,-42.2 0.05,-4.75 0.1,-8.85 0.1,-11.525 v -0.125 c 0.025,-6.5 0.425,-11.475 1.075,-13.325 0.775,-2.125 1.675,-2.9500002 1.725,-3.0250002 m 7.6000001,-3.3 c -0.05,0.75 -0.25,3.5750002 -0.25,3.7000002 -0.15,7.025 1.35,12.3 4.575,16.1 3.5,4.1 8.675,6.2 15.4,6.2 7.1,0 12.375,-2.15 15.65,-6.4 4.15,-5.35 4.025,-12.775 3.55,-16.7000002 l -0.425,-2.725 m -21.25,8.4750002 c -0.825,-0.275 -1.2,-0.35 -2.3,-0.575 -6.8,-1.5 -13.85,-7.3000002 -14.175,-7.5500002 m 36.5,-0.225 c -0.35,0.25 -8.675,6.0500002 -15.475,7.4250002 -5.5,1.125 -5.6,2.875 -5.075,5.65 0.525,2.85 7,2.025 7.075,2 0.025,0 3.925,-0.6 8.05,-1.775 2.7,-0.775 5.675,-2.325 5.7,-2.35 m -35.85,0.8 c 0.05,0.025 4.4,2.075 7.125,2.775 3.8,0.975 7.075,1.45 9.375,1.05"
    />
    <path
      key="outline"
      d="m 16.08781,16.454377 c 0,0 3.85,1.775 6.65,2.575 4.25,1.2 9.6,1.375 11.725,0.675 m 24.375,-13.5250002 c 0,0 1.15,1.8500002 1.9,3.9250002 0.5,1.4 1.025,5.55 1.05,13.075 0,0 0.05,6.875 0.1,11.625 0.125,12.475 0.3,29.575 0.15,42.175 -0.05,3.75 -3.125,6.8 -6.875,6.8 h -44.075 c -3.75,0 -6.8250001,-3.05 -6.8750001,-6.8 -0.15,-12.6 0.025,-29.7 0.15,-42.175 0.05,-4.75 0.1,-8.85 0.1,-11.525 v -0.125 c 0.025,-7.525 0.525,-11.675 1.05,-13.075 0.75,-2.075 1.9000001,-3.9250002 1.9000001,-3.9250002 m -0.6500001,-0.4 m 1.2750001,0.8 m 5.3,-2.75 c 0,0.25 -0.2,3.125 -0.225,3.3750002 -0.1,4.425 0.3,11.35 4.75,16.6 3.65,4.275 9.025,6.45 15.975,6.45 7.35,0 12.825,-2.25 16.25,-6.675 4.25,-5.475 4.225,-12.9 3.7,-17.2750002 l -0.375,-2.3 m -37.975,10.0750002 c 0.025,0.025 5.225,2.3 7.85,3.05 2.525,0.725 5.2,1.175 7.35,1.175 m -0.075,-5.425 c -9.5,-1.7 -15.425,-7.6500002 -15.725,-7.9000002 m 17.375,6.6750002 c -0.85,-0.275 -1.85,-0.55 -2.975,-0.8 -6.7,-1.475 -14.15,-7.8000002 -14.15,-7.8000002 m 36.15,0.125 c 0,0 6.475,25.1250002 -17.4,25.1250002 -22.9,0 -18.825,-25.1250002 -18.825,-25.1250002 l -7.425,2.925 c 0,0 -1.5500001,0.625 -3.1750001,3.2250002 -2,3.2 -1.975,12.725 -1.975,14 -0.025,9.425 -0.475,36.15 -0.25,53.725 0.05,4.85 4.025,8.775 8.8750001,8.775 h 44.1 c 4.85,0 8.825,-3.9 8.875,-8.775 0.225,-17.575 -0.225,-44.3 -0.25,-53.725 0,-1.275 0.025,-10.8 -1.975,-14 -1.625,-2.6000002 -3.175,-3.2250002 -3.175,-3.2250002 z m 0.425,1.95 c -0.375,0.25 -8.45,5.9250002 -15.5,7.3500002 -2.75,0.55 -3.7,1.25 -4.025,1.725 -0.3,0.425 -0.325,1.125 -0.075,2.5 0.125,0.725 1.925,1.125 3.825,1.125 0.625,0 1.25,-0.05 1.85,-0.125 0.025,0 3.825,-0.575 7.9,-1.75 2.55,-0.725 6.225,-2.725 6.25,-2.725 m -0.75,-10.1750002 c 0,0 -8.65,6.1000002 -15.375,7.4500002 -5.975,1.225 -6.25,3.4 -5.675,6.525 0.675,3.65 7.925,2.6 7.925,2.6 0,0 3.925,-0.6 8.15,-1.8 2.8,-0.8 5.3,-2.125 5.3,-2.125 m -18.7,70.1"
    />
  </>
)

/*
 * SVG elements for the back
 */
const Back = ({ stroke }) => (
  <>
    <path
      key="outline"
      d="m 103.38781,14.879377 a 1.35,1.35 0 0 1 -1.35,1.35 1.35,1.35 0 0 1 -1.35,-1.35 1.35,1.35 0 0 1 1.35,-1.35 1.35,1.35 0 0 1 1.35,1.35 z m 0.625,0 a 1.975,1.975 0 0 1 -1.975,1.975 1.975,1.975 0 0 1 -1.975,-1.975 1.975,1.975 0 0 1 1.975,-1.975 1.975,1.975 0 0 1 1.975,1.975 z M 85.38781,2.1293768 c 0,0 -2.875,0.275 -6.4,2.525 -2.35,1.5 -4.1,3.9750002 -4.1,3.9750002 0.05,0.325 1,0.55 3.425,2.775 2.25,2.05 4.35,3.375 10.825,5.65 3.05,1.075 11.9,2.55 14.55,1.55 0,0 3.075,-0.7 3.075,-3.7 0,-3.625 -4.075,-4.2 -4.075,-4.2 -0.85,-0.275 -1.85,-0.55 -2.975,-0.8 -6.725,-1.475 -14.325,-7.7750002 -14.325,-7.7750002 z m 36.475,13.1500002 c -1.425,6.2 -5.8,12.325 -17.575,12.325 -11,0 -15.65,-5.425 -17.625,-11.45 m -11.8,-7.525 c -1.925,3.325 -1.95,12.7 -1.95,13.975 -0.025,9.425 -0.475,36.15 -0.25,53.725 0.05,4.85 4.025,8.775 8.875,8.775 h 44.1 c 4.85,0 8.825,-3.9 8.875,-8.775 0.225,-17.575 -0.225,-44.3 -0.25,-53.725 0,-1.275 0.175,-10.575 -1.85,-13.775 m -26.9,3.225 c 0.325,-0.1 0.7,-0.175 1.1,-0.25 7.05,-1.425 16.275,-7.8250002 17.525,-9.0250002 m -18.275,14.6250002 c 3.3,0.025 6.025,-0.625 10.125,-1.775 2.55,-0.725 6.1,-2.1 7.775,-3.075 2.05,-1.175 5.625,-4.625 7.875,-5.125 m -9.525,6.675 m -0.525,-11.7250002 c 0,0 -8.65,6.1000002 -15.375,7.4500002 -1.325,0.275 -2.375,0.575 -3.175,0.95 1,0.25 3.7,1.175 3.7,4.125 0,3 -3.075,3.7 -3.075,3.7 -0.125,0.05 -0.3,0.1 -0.475,0.125 2.3,0.65 5.275,0.225 5.275,0.225 0,0 3.925,-0.6 8.15,-1.8 2.8,-0.8 6.975,-2.325 10.225,-4.625 4.1,-2.925 5.575,-3.675 5.575,-3.675 0,0 -1.175,-2.9500002 -3.675,-4.4250002 -3.025,-1.75 -7.15,-2.05 -7.15,-2.05 z m -33.275,20.7500002 c 3.65,4.275 9.025,6.45 15.975,6.45 7.35,0 12.825,-2.25 16.25,-6.675 2.05,-2.65 3.1,-5.725 3.575,-8.725 m 0.025,0 m -3.6,8.725 c -3.425,4.425 -8.9,6.675 -16.25,6.675 -6.95,0 -12.325,-2.175 -15.975,-6.45 -2.125,-2.475 -3.25,-5.125 -3.925,-7.9 m -0.5,-2.6 m -8.175,-5.225 c 0,0 1.95,0.925 3.95,2.75 2,1.825 3.825,3 10.15,5.25 2.975,1.05 9.15,2.2 11.3,2.2 0,0 3.625,-0.025 3.825,-2.55 0.175,-2.2 -3.3,-3.025 -3.3,-3.025 -12.275,-2.2 -17.95,-9.1750002 -18.275,-9.4500002 m -6.15,2.525 m 1.275,0.775 m 24.725,79.2250002 m -0.55,-70.6 a 0.25,0.25 0 0 1 -0.25,0.25 0.25,0.25 0 0 1 -0.25,-0.25 0.25,0.25 0 0 1 0.25,-0.25 0.25,0.25 0 0 1 0.25,0.25 z m -0.75,0 a 0.25,0.25 0 0 1 -0.25,0.25 0.25,0.25 0 0 1 -0.25,-0.25 0.25,0.25 0 0 1 0.25,-0.25 0.25,0.25 0 0 1 0.25,0.25 z m 0,0.75 a 0.25,0.25 0 0 1 -0.25,0.25 0.25,0.25 0 0 1 -0.25,-0.25 0.25,0.25 0 0 1 0.25,-0.25 0.25,0.25 0 0 1 0.25,0.25 z m 0.75,0 a 0.25,0.25 0 0 1 -0.25,0.25 0.25,0.25 0 0 1 -0.25,-0.25 0.25,0.25 0 0 1 0.25,-0.25 0.25,0.25 0 0 1 0.25,0.25 z"
    />
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 85.08781,15.554377 c 0.75,2.9 1.975,5.325 3.7,7.35 3.5,4.1 8.675,6.2 15.4,6.2 7.1,0 12.375,-2.15 15.65,-6.4 1.825,-2.375 2.825,-5.125 3.325,-7.825 m 8.6,-6.975 c -1.325,0.3 -3.3,1.8 -5.025,3.125 -1,0.775 -1.975,1.5 -2.725,1.95 -1.675,0.975 -5.225,2.375 -7.9,3.125 -4.275,1.2 -6.9,1.8 -10.05,1.8 -0.075,0 -0.15,0 -0.225,0 m -0.475,-6.35 c 0.375,-0.1 0.75,-0.175 1.125,-0.275 6.875,-1.4 15.725,-7.3750002 17.05,-8.6750002 m -39.575,-0.1 c 0.05,0.05 0.1,0.1 0.2,0.2 2.375,2.575 7.8,7.1250002 17.525,8.8750002 h 0.025 c 0.15,0.05 3.875,0.95 3.675,3.55 -0.175,2.35 -2.9,3 -4.3,3 -2.15,0 -8.35,-1.125 -11.475,-2.225 -6.275,-2.225 -8.175,-3.4 -10.3,-5.35 -1.925,-1.75 -3.8,-2.675 -3.825,-2.675 m 55.8,1.625 c 0.475,2.65 0.925,7.075 0.95,13 0,0 0.05,6.875 0.1,11.625 0.125,12.475 0.3,29.575 0.15,42.175 -0.05,3.75 -3.125,6.8 -6.875,6.8 h -44.1 c -3.75,0 -6.825,-3.05 -6.875,-6.8 -0.15,-12.6 0.025,-29.7 0.15,-42.175 0.05,-4.75 0.1,-8.85 0.1,-11.525 v -0.125 c 0.025,-7.525 0.525,-11.675 1.05,-13.075 m 55.975,-0.225 c 0.65,1.85 1.075,6.825 1.075,13.325 v 0 c 0,0 0.05,6.875 0.1,11.625 0.125,12.5 0.3,29.6 0.15,42.2 -0.05,4.15 -3.475,7.525 -7.625,7.525 h -44.1 c -4.15,0 -7.575,-3.375 -7.625,-7.525 -0.15,-12.6 0.025,-29.7 0.15,-42.2 0.05,-4.75 0.1,-8.85 0.1,-11.525 v -0.125 c 0.025,-6.5 0.425,-11.475 1.075,-13.325"
    />
  </>
)
