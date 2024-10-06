import React from 'react'
import { LineDrawingWrapper, thin, dashed } from './shared.mjs'

const strokeScale = 0.4

export const Wahid = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 162 126" {...{ className, stroke }}>
      <Front stroke={stroke} />
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

export const WahidFront = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 81 126" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

export const WahidBack = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="82 0 81 126" {...{ className, stroke }}>
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * Always use an id for defs that is unique to the design because if we have
 * multiple linedrawings on the page, they share the same namespace and thus
 * IDs will collide
 */
const defs = (
  <defs>
    <g id="wahid-button">
      <circle cx="0" cy="0" r="1.8" strokeWidth="0.45" />
      <circle cx="-0.55" cy="-0.55" r="0.35" strokeWidth="0.25" />
      <circle cx="0.55" cy="-0.55" r="0.35" strokeWidth="0.25" />
      <circle cx="0.55" cy="0.55" r="0.35" strokeWidth="0.25" />
      <circle cx="-0.55" cy="0.55" r="0.35" strokeWidth="0.25" />
    </g>
  </defs>
)

/*
 * React component for the front
 */
export const Front = ({ stroke }) => (
  <>
    {defs}
    <path
      key="darts"
      {...thin(stroke)}
      d="m 59.254131,58.572266 c -0.282849,14.103167 -0.248304,26.460675 0.06123,37.305715 m 0.08331,2.68639 c 0.146442,4.367849 0.339027,18.032999 0.574783,21.909619 M 30.210956,97.193711 H 6.6510187 m 44.2643213,0 H 74.364837 M 22.237874,58.572266 c 0.282849,14.103167 0.248304,26.460675 -0.06123,37.305715 m -0.08331,2.68639 c -0.146442,4.367849 -0.339027,18.032999 -0.574783,21.909619 M 30.245567,98.518921 H 6.6976497 v -2.64584 H 30.245567 Z M 50.8819,95.870781 h 23.547916 v 2.64583 H 50.8819 Z"
    />
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 25.217291,3.134339 c 3.595687,1.275291 7.688791,2.174875 12.197291,2.248958 0.410104,0.0079 0.814917,0.0079 1.217084,0 h 1.801812 0.529167 1.801812 c 0.399521,0.0079 0.806979,0.0079 1.217083,0 4.5085,-0.07408 8.601605,-0.973667 12.197292,-2.248958"
    />
    <path
      key="outline"
      d="m 41.970707,66.390917 c 0.0979,-0.0053 0.235479,-0.01587 0.399521,-0.0344 0.320146,-0.03175 0.484188,-0.05027 0.484188,-0.07673 0.0026,-0.02646 -0.150813,-0.07144 -0.862542,-0.150813 m 0.243417,20.476117 c 0.0979,-0.005 0.235479,-0.0159 0.39952,-0.0344 0.320146,-0.0317 0.484188,-0.0503 0.484188,-0.0767 0.0026,-0.0265 -0.150813,-0.0714 -0.862542,-0.15081 m -0.02117,-9.84518 c 0.0979,-0.005 0.235479,-0.01587 0.39952,-0.0344 0.320146,-0.03175 0.484188,-0.05027 0.484188,-0.07673 0.0026,-0.02646 -0.150813,-0.07144 -0.862542,-0.150813 m -0.28575,20.476113 c 0.0979,-0.005 0.235479,-0.0159 0.399521,-0.0344 0.320146,-0.0318 0.484188,-0.0503 0.484188,-0.0767 0.0026,-0.0264 -0.150813,-0.0714 -0.862542,-0.15081 m 0.243417,10.368989 c 0.0979,-0.005 0.235479,-0.0159 0.39952,-0.0344 0.320146,-0.0317 0.484188,-0.0503 0.484188,-0.0767 0.0026,-0.0265 -0.150813,-0.0714 -0.862542,-0.15081 m -0.28575,-50.273502 c 0.0979,-0.0053 0.235479,-0.01587 0.399521,-0.0344 0.320146,-0.03175 0.484188,-0.05027 0.484188,-0.07673 0.0026,-0.02646 -0.150813,-0.07144 -0.862542,-0.150812 m -1.280601,58.380324 -0.01583,3.18029 m -2.248956,-0.0159 h 4.529632 M 5.1089577,52.47913 v 9.887479 c 0.0053,0.844021 0.01323,2.450041 0,4.458229 -0.08202,12.453933 -0.8255,20.367623 -2.38125,43.333452 -0.06085,0.89694 -0.145521,2.15636 -0.248709,3.70417 M 25.217291,1.943714 9.6068737,8.02913 10.400624,11.733297 c 0.187854,1.063625 0.473604,2.725208 0.79375,4.7625 1.516063,9.681104 1.778,15.187083 1.852084,17.197916 0.22225,5.953125 -0.201084,7.839604 -0.529167,8.995834 -1.158875,4.071937 -3.2332083,6.373812 -3.7041673,6.879166 -1.336146,1.436688 -2.714625,2.352146 -3.704166,2.910417 1.09802,-0.833438 2.725208,-2.278063 3.96875,-4.497917 C 10.940374,44.660692 10.945666,41.39838 10.929791,39.77913 10.890101,35.707192 10.239228,20.768818 9.6068737,8.02913 M 40.695416,49.579296 c -1.764771,-2.989791 -3.6195,-6.439958 -5.423959,-10.326687 -2.137833,-4.606396 -3.341687,-7.985125 -5.027083,-12.7 0,0 -3.913187,-10.959041 -4.7625,-18.25625 -0.206375,-1.772708 -0.264583,-3.481916 -0.264583,-3.481916 -0.03969,-1.156229 -0.02646,-2.135188 0,-2.868083 3.595687,1.275291 7.688791,2.174875 12.197291,2.248958 0.410104,0.0079 0.814917,0.0079 1.217084,0 h 1.801812 0.529167 1.801812 c 0.399521,0.0079 0.806979,0.0079 1.217083,0 4.5085,-0.07408 8.601605,-0.973667 12.197292,-2.248958 0.02646,0.732895 0.03969,1.711854 0,2.868083 0,0 -0.05821,1.709208 -0.264583,3.481916 -0.849313,7.297209 -4.7625,18.25625 -4.7625,18.25625 -1.685396,4.714875 -2.88925,8.093604 -5.027084,12.7 -2.984499,6.434667 -6.11452,11.665479 -8.731249,15.610417 v 53.982934 l 9.405937,14.86165 c 1.695979,-0.33867 3.413125,-0.70909 5.146146,-1.11125 9.895416,-2.30188 18.896541,-5.34459 26.987499,-8.73125 m -38.237582,0.20637 -6.098646,9.63613 c -1.695979,-0.33867 -3.413125,-0.70909 -5.146146,-1.11125 -9.895417,-2.30188 -18.896541,-5.34459 -26.9875003,-8.73125 M 76.281873,52.47913 v 9.887479 c -0.0053,0.844021 -0.01323,2.450041 0,4.458229 0.08202,12.453933 0.8255,20.367623 2.38125,43.333452 0.06085,0.89694 0.145521,2.15636 0.248709,3.70417 M 56.17354,1.943714 71.783957,8.02913 l -0.79375,3.704167 c -0.187854,1.063625 -0.473604,2.725208 -0.79375,4.7625 -1.516063,9.681104 -1.778,15.187083 -1.852083,17.197916 -0.22225,5.953125 0.201083,7.839604 0.529166,8.995834 1.158875,4.071937 3.233208,6.373812 3.704167,6.879166 1.336146,1.436688 2.714625,2.352146 3.704166,2.910417 -1.09802,-0.833438 -2.725208,-2.278063 -3.96875,-4.497917 -1.862666,-3.320521 -1.867958,-6.582833 -1.852083,-8.202083 0.03969,-4.071938 0.690563,-19.010312 1.322917,-31.75"
    />
    <use xlinkHref="#wahid-button" x="40" y="56.1" color="currentColor"></use>
    <use xlinkHref="#wahid-button" x="40" y="66.2" color="currentColor"></use>
    <use xlinkHref="#wahid-button" x="40.15" y="76.3" color="currentColor"></use>
    <use xlinkHref="#wahid-button" x="40.15" y="86.4" color="currentColor"></use>
    <use xlinkHref="#wahid-button" x="40.2" y="96.5" color="currentColor"></use>
    <use xlinkHref="#wahid-button" x="40.3" y="106.6" color="currentColor"></use>
  </>
)

/*
 * React component for the back
 */
const Back = ({ stroke }) => (
  <>
    <path
      key="outline"
      d="m 157.23121,52.47913 v 9.887479 c -0.005,0.844021 -0.0132,2.450041 0,4.458229 0.082,12.453933 0.8255,20.367623 2.38125,43.333452 0.0608,0.89694 0.14552,2.15636 0.24871,3.70417 M 137.1229,1.943707 152.73331,8.029122 m 4.4979,44.450008 c -1.09802,-0.833438 -2.72521,-2.278063 -3.96875,-4.497917 -1.86267,-3.320521 -1.86796,-6.582833 -1.85208,-8.202083 0.0397,-4.071938 0.69056,-19.010312 1.32291,-31.75 M 137.12288,1.943714 c -3.59569,1.275291 -7.6888,2.174875 -12.1973,2.248958 -0.4101,0.0079 -0.81491,0.0079 -1.21708,0 h -1.80181 -0.52917 -1.80181 c -0.39952,0.0079 -0.80698,0.0079 -1.21708,0 -4.5085,-0.07408 -8.60161,-0.973667 -12.1973,-2.248958 m 18.05517,115.943056 3.683,5.81819 c 1.69598,-0.33867 3.41313,-0.70908 5.14615,-1.11125 9.89541,-2.30187 18.89654,-5.34458 26.9875,-8.73125 -7.9719,1.69333 -17.11325,3.09033 -27.24944,3.70417 -3.81529,0.23019 -7.48771,0.33602 -11.00667,0.33866 m -2.54793,-0.0185 -3.683,5.81819 c -1.69598,-0.33867 -3.41313,-0.70908 -5.14615,-1.11125 -9.89542,-2.30187 -18.896536,-5.34458 -26.987496,-8.73125 7.9719,1.69333 17.113246,3.09033 27.249436,3.70417 3.81529,0.23019 7.48771,0.33602 11.00666,0.33866 M 86.058294,52.47913 v 9.887479 c 0.005,0.844021 0.0132,2.450041 0,4.458229 -0.082,12.453933 -0.8255,20.367623 -2.38125,43.333452 -0.0609,0.89694 -0.14552,2.15636 -0.24871,3.70417 M 106.16665,1.943707 90.556244,8.029122 m -4.49795,44.450008 c 1.09802,-0.833438 2.72521,-2.278063 3.96875,-4.497917 1.86267,-3.320521 1.86796,-6.582833 1.85209,-8.202083 -0.0397,-4.071938 -0.69057,-19.010312 -1.32292,-31.75"
    />
    <path
      key="stitches"
      {...thin(stroke)}
      {...dashed(stroke)}
      d="m 138.40611,2.446422 c -0.41011,0.248708 -0.83609,0.481542 -1.28059,0.690563 -4.36827,2.055812 -10.93787,2.227791 -12.19729,2.248958 -0.4101,0.0079 -0.81492,0.0079 -1.21708,0 h -1.80182 -0.52916 -1.80181 c -0.39953,0.0079 -0.80698,0.0079 -1.21709,0 -4.5085,-0.07408 -8.6016,-0.973667 -12.19729,-2.248958 -0.51065,-0.198438 -1.02129,-0.39423 -1.53458,-0.592667"
    />
    <path
      key="darts"
      {...thin(stroke)}
      d="m 143.92015,47.170466 c 0.43464,22.690304 0.78099,45.327635 2.67748,68.895054 M 99.011784,47.170466 c -0.43464,22.690304 -0.78099,45.327635 -2.67748,68.895054 M 121.77706,4.192663 V 117.9635 m 19.12934,-1.0689 v 3.66977 m -38.36459,-3.66977 v 3.66977"
    />
  </>
)
