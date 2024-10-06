import React from 'react'
import { LineDrawingWrapper, thin } from './shared.mjs'

const strokeScale = 0.5

export const Tristan = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 152 102" {...{ className, stroke }}>
      <Front stroke={stroke} />
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the front
 */
export const TristanFront = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 76 102" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the back
 */
export const TristanBack = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="76 0 76 102" {...{ className, stroke }}>
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
      key="folds"
      opacity={0.3}
      d="m 11.444918,3.4160237 c -0.160362,-0.160362 8.176004,20.5190483 9.37078,32.6760723 1.612027,16.402602 0.548439,40.878153 0.548439,40.878153 M 61.381584,3.4553407 C 61.541946,3.2949787 53.205579,23.97439 52.010803,36.131414 50.398776,52.534016 51.462364,77.009567 51.462364,77.009567"
    />
    <path
      key="outline"
      d="m 34.022027,33.323189 5.403662,0.06972 m -5.474652,-1.14675 5.403662,0.06972 m 1.408526,43.556395 -1.791978,-0.03261 m -4.584465,-0.08342 -1.752021,-0.03188 m 8.241813,-1.030521 -3.508319,-0.07211 m -1.551794,-0.03189 -3.408259,-0.07005 m 3.492172,0.02236 c 0,0 -0.719661,0.94456 -0.0926,2.045219 0,0 0.775231,0.330732 1.394351,0.0476 0,0.003 -0.2487,-1.29381 0.304268,-1.997609 m -0.339738,0.94729 c 0,0 1.30547,1.238149 1.133488,2.764798 -0.169328,1.529292 -0.47625,-0.534458 -0.47625,-0.534458 m -2.267828,-2.040901 c 0,0 -0.84102,1.01432 -1.010351,1.749859 -0.169339,0.73819 0.470961,0.780521 0.505351,0.26194 -0.02119,-1.016 0.327729,-1.916549 0.505,-2.011799 z m 3.673189,2.26115 c 0.386951,2.29139 1.36316,4.64158 1.58414,4.77828 -0.843209,0.51267 -2.05282,-0.0878 -2.05282,-0.0878 -1.113078,-1.313702 -1.49601,-5.31689 -1.560629,-6.08955 7.94e-4,-2.64e-4 0.0011,-7.93e-4 0.0021,-0.0011 0,1.88e-4 -0.003,-0.0186 -0.005,-0.0279 m -1.58079,-1.44539 c -0.0974,0.36567 -0.117779,0.8606 0.17467,1.39423 -0.0501,2.473698 -1.668629,5.86527 -1.668629,5.86527 0,0 -0.78881,0.947168 -1.484662,0.61908 -0.695849,-0.32544 -0.99736,-0.711581 -0.99736,-0.711581 0.542401,-0.0661 1.76489,-2.26777 1.97921,-4.33152 m 1.997292,-2.837551 c -2.64e-4,0.0011 -0.003,0.004 -0.004,0.005 -0.0464,0.0365 -0.144021,0.117401 -0.259932,0.21807 -0.3986,0.323011 -1.149458,0.983551 -1.54668,1.939419 -0.0258,0.0598 -0.0505,0.119822 -0.0718,0.180351 -0.0288,0.0816 -0.053,0.16343 -0.0724,0.24598 -0.01931,0.0825 -0.0338,0.165611 -0.0424,0.24856 -0.01119,0.10821 -0.0269,0.21693 -0.0434,0.32556 -0.008,0.0493 -0.01561,0.0985 -0.02429,0.147801 -0.007,0.0389 -0.01439,0.0779 -0.0217,0.11679 -0.0273,0.141909 -0.0577,0.283728 -0.092,0.424259 -0.37727,0.724821 -0.70044,1.497039 -0.86764,2.24844 -0.0615,0.11085 -0.123331,0.214241 -0.184492,0.310581 -0.0011,0.0021 -0.0021,0.004 -0.004,0.006 -0.0603,0.0947 -0.120182,0.18216 -0.1788,0.261483 -7.94e-4,0.0011 -0.0011,0.0021 -0.0021,0.003 -0.007,0.01 -0.0146,0.02 -0.0217,0.0295 -0.0287,0.0379 -0.0563,0.0717 -0.0842,0.105421 -0.01881,0.02249 -0.0374,0.0451 -0.0558,0.0656 -0.02289,0.02561 -0.0455,0.0489 -0.0677,0.0713 -0.0209,0.02109 -0.0412,0.0408 -0.0615,0.0589 -0.02381,0.02151 -0.0481,0.0433 -0.0708,0.0605 -0.003,0.003 -0.007,0.005 -0.01029,0.008 -0.032,0.02339 -0.0625,0.0425 -0.092,0.0569 -0.009,0.005 -0.01871,0.008 -0.0279,0.01191 -0.007,0.003 -0.0136,0.006 -0.02021,0.008 -0.01691,0.005 -0.0333,0.009 -0.0491,0.0114 0,0 0.0368,0.0457 0.106968,0.114721 -0.48809,-0.42858 -0.920689,-1.267769 -0.23668,-2.85564 1.18532,-2.751672 4.38681,-5.043101 4.38681,-5.043101 h 5.29e-4 c 0.137059,-0.0945 0.3014,-0.14388 0.489378,-0.154001 0.313302,-0.01691 0.691912,0.075 1.118791,0.246502 -0.0529,0.336018 2.7598,1.94478 4.027152,3.016351 1.264697,1.074197 1.03183,2.32052 0.354499,4.029728 0,0 -0.319569,0.704461 -1.126551,1.16014 0.01521,-0.0149 0.0377,-0.01349 0.0519,-0.03 -0.0182,-0.009 -0.0468,-0.0434 -0.07,-0.0681 -0.25024,-0.45326 -0.496261,-1.06707 -0.690438,-1.596631 0.104187,-0.119549 1.195948,-1.47461 0.125619,-2.360228 -0.35215,-0.291381 -0.684321,-0.55071 -0.99477,-0.78807 -0.0271,-0.117861 -0.0569,-0.23142 -0.0889,-0.34158 -0.01291,-0.0444 -0.0273,-0.0855 -0.0408,-0.128672 -0.02119,-0.0675 -0.0423,-0.135929 -0.0651,-0.200509 -0.01431,-0.0405 -0.0301,-0.0784 -0.045,-0.117819 -0.02439,-0.0645 -0.0481,-0.129169 -0.0739,-0.19069 -0.0164,-0.0391 -0.0338,-0.0758 -0.0506,-0.113681 -0.02432,-0.0546 -0.0482,-0.109638 -0.0734,-0.161751 -0.02241,-0.0464 -0.0457,-0.0904 -0.0687,-0.134879 -0.02109,-0.0407 -0.0421,-0.0818 -0.0636,-0.12092 -0.0249,-0.0455 -0.0501,-0.0889 -0.0754,-0.132289 -0.02119,-0.0362 -0.0422,-0.0722 -0.0636,-0.106971 -0.0249,-0.0405 -0.0498,-0.0793 -0.0749,-0.117819 -0.02191,-0.0336 -0.0436,-0.067 -0.0656,-0.0992 -0.0245,-0.0358 -0.0489,-0.0704 -0.0734,-0.104391 -0.0249,-0.0347 -0.0496,-0.0684 -0.0744,-0.101291 -0.02339,-0.031 -0.0466,-0.061 -0.0698,-0.0904 -0.0204,-0.02601 -0.0407,-0.0512 -0.061,-0.076 -0.0263,-0.0322 -0.0522,-0.0638 -0.078,-0.0941 -0.01471,-0.0173 -0.0284,-0.033 -0.0429,-0.0496 -0.073,-0.0837 -0.142769,-0.1596 -0.20877,-0.227899 -0.0654,-0.0677 -0.321529,-0.342591 -0.37687,-0.396211 m -0.17142,1.575469 0.009,0.004 c 0,0 0.0011,0.009 0.0011,0.01 l -0.009,-0.007 c 0,-1.8e-5 -5.29e-4,2.1e-5 -5.29e-4,0 -2.41e-4,-0.0021 -2.65e-4,-0.005 -5.29e-4,-0.007 z m -0.01961,-0.207737 c 5.29e-4,0.006 0.0011,0.0122 0.0021,0.0181 -5.3e-4,-0.007 -0.0021,-0.01061 -0.0021,-0.0181 1.4e-4,-7.2e-5 2.65e-4,6.8e-5 5.29e-4,0 z m 0.02119,0.208769 0.007,0.003 c 0,0 0.006,0.0737 0.01029,0.130228 -0.004,-0.02019 -0.009,-0.0614 -0.0176,-0.133329 z m 1.44126,6.06888 c 0.471918,6.110079 1.182899,14.618465 1.602999,16.297191 l -2.177651,-0.29921 c 0,0 -1.139978,-20.428611 -1.27227,-21.513403 -0.01331,-0.106638 -0.007,-0.197718 0.009,-0.28112 0.140049,-0.01299 0.28257,-0.0451 0.417539,-0.106457 m -1.576751,-0.489581 c 0.015,0.0527 0.0342,0.10627 0.0548,0.1602 -0.02069,-0.0538 -0.0398,-0.107591 -0.0548,-0.1602 z m 0.0925,0.252701 c 0.0274,0.0624 0.0563,0.125068 0.0925,0.188618 0,0 0.214169,0.0902 0.506431,0.135912 0.0577,0.509648 0.476438,4.360968 0.15244,6.77736 -0.343961,2.584979 -0.44191,14.73972 -0.79116,15.53083 l -1.886712,0.87333 c 0,0 0.88388,-12.162932 1.095542,-14.462161 0.146819,-1.594789 0.187938,-4.05642 0.201019,-5.45651 0.357831,-1.076671 0.683869,-2.341951 0.705901,-3.43028 -0.029,-0.053 -0.0529,-0.105 -0.076,-0.157099 z M 39.409386,67.346393 37.241,69.906765 m -0.691351,0.816328 -2.535477,2.993822 m 5.364068,-7.802214 -2.797319,3.279893 m -0.677447,0.794314 -1.924773,2.256821 m -0.01429,-4.585492 5.40365,6.380482 m -5.391671,-7.894361 5.381195,6.353969 m 1.537129,-17.519678 -3.674279,4.338489 m -0.691351,0.816328 -3.859781,4.557524 m 7.895398,-10.78117 -4.004345,4.695147 m -0.677447,0.794314 -3.735362,4.379761 m 0.07584,-8.739908 8.225411,9.712341 m -7.703649,-10.62429 8.225411,9.712341 m -1.580971,-17.557915 -2.093308,2.471722 m -0.691351,0.816328 -2.624627,3.099088 m 5.451409,-7.905359 -2.79551,3.277772 m -0.677447,0.794314 -1.980496,2.322157 m -0.0077,-4.708844 5.427796,6.408993 m -5.35861,-7.855324 5.362971,6.33245 m 1.58228,-17.576902 -3.674279,4.338489 m -0.691351,0.816328 -3.859781,4.557524 m 7.895398,-10.78117 -4.004345,4.695147 m -0.677447,0.794314 -3.735362,4.379761 m 0.07584,-8.739908 8.225411,9.712341 m -7.703655,-10.624289 8.225411,9.712341 m 1.647573,32.768978 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.04587,-0.468252 -1.04587,-1.04587 0,-0.577618 0.468252,-1.04587 1.04587,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z m 0.0047,-10.622322 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.04587,-0.468252 -1.04587,-1.04587 0,-0.577618 0.468252,-1.04587 1.04587,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z m -0.02055,-10.587624 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.045871,-0.468252 -1.045871,-1.04587 0,-0.577618 0.468253,-1.04587 1.045871,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z m 0.01444,-10.656837 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.04587,-0.468252 -1.04587,-1.04587 0,-0.577618 0.468252,-1.04587 1.04587,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z m 0.07584,-10.563805 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.04587,-0.468252 -1.04587,-1.04587 0,-0.577618 0.468252,-1.04587 1.04587,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z m -10.021835,42.37986 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.04587,-0.468252 -1.04587,-1.04587 0,-0.577618 0.468252,-1.04587 1.04587,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z m 0.0047,-10.622322 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.04587,-0.468252 -1.04587,-1.04587 0,-0.577618 0.468252,-1.04587 1.04587,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z m -0.02056,-10.587627 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.04587,-0.468252 -1.04587,-1.04587 0,-0.577618 0.468252,-1.04587 1.04587,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z m 0.01444,-10.656838 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.04587,-0.468252 -1.04587,-1.04587 0,-0.577618 0.468252,-1.04587 1.04587,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z m 0.07584,-10.563804 c 0,0.577618 -0.468252,1.04587 -1.04587,1.04587 -0.577618,0 -1.04587,-0.468252 -1.04587,-1.04587 0,-0.577618 0.468252,-1.04587 1.04587,-1.04587 0.577618,0 1.04587,0.468252 1.04587,1.04587 z M 9.174628,4.4082473 c -0.178393,-0.467667 6.305489,20.8545437 3.284766,28.1373347 -1.498909,3.613784 -3.840522,5.464764 -6.06165,7.05917 -2.4489335,1.757933 -4.2100055,2.306616 -4.2100055,2.306616 M 63.502931,4.3223675 c 0.178393,-0.4676669 -6.30549,20.8545435 -3.284767,28.1373345 1.498909,3.613784 3.840523,5.464764 6.061651,7.05917 2.448934,1.757933 4.210006,2.306616 4.210006,2.306616 M 14.257153,2.7658061 c 0,0 5.904445,23.2929029 9.116501,25.9089469 1.427118,1.162309 5.83299,1.75714 10.613849,1.852556 m 5.473236,-0.104042 c 4.082176,-0.238987 7.698272,-0.83679 9.130848,-1.748514 C 52.295676,26.317387 58.646035,2.4214323 58.646035,2.4214323 M 7.1434724,74.175419 c 1.07421,0.37835 2.62202,0.88371 4.5217296,1.35731 3.45545,0.8599 6.18595,1.143 8.58837,1.35731 5.166078,0.458578 8.658317,0.664494 12.407757,0.736595 m 8.714696,-0.05246 c 3.620627,-0.08958 6.186305,-0.259123 10.974157,-0.684127 2.40241,-0.21431 5.13291,-0.49741 8.58837,-1.35731 1.89706,-0.47096 3.44752,-0.97631 4.52173,-1.35731 M 57.796875,2.2994186 c 0,0 -5.917915,23.0224144 -9.622004,25.3797804 -1.426262,0.907705 -4.87543,1.504251 -8.784206,1.786238 l 0.0011,4.712349 m 3.36e-4,1.503729 0.0011,5.041221 m 3.42e-4,1.528384 7.38e-4,3.295021 0.0015,6.623852 6.83e-4,3.050457 m 3.43e-4,1.53395 0.0012,5.19448 m 3.48e-4,1.55137 7.01e-4,3.128895 0.0015,6.772007 2.98e-4,1.250688 m 2.84e-4,1.189682 6.6e-5,0.278885 m 2.884406,2.549981 c 3.059667,-0.189791 6.532359,-0.405289 10.159982,-0.727303 2.40241,-0.21432 5.13291,-0.49742 8.58837,-1.35732 1.89706,-0.47095 3.44752,-0.97631 4.52173,-1.35731 l 5.008681,-34.025623 c 0,0 -7.06302,-2.885962 -9.682138,-9.49416 -2.619243,-6.608198 3.43769,-27.2878122 3.43769,-27.2878122 L 57.792194,2.2912787 c 0,0 -5.917915,14.0265803 -9.622004,16.3839463 -3.704089,2.357366 -21.05213,2.616044 -24.264186,0 -3.212056,-2.616044 -9.061867,-16.3798762 -9.061867,-16.3798762 0,0 5.854492,22.7678062 9.066548,25.3838502 1.404719,1.144067 5.513018,1.738329 10.083514,1.837419 l 0.0024,4.821405 m 7.45e-4,1.479071 0.0024,4.807033 m 7.2e-4,1.429793 0.0019,3.692672 0.0032,6.179364 0.0019,3.712847 m 7.9e-4,1.568805 0.0022,4.444947 m 7.81e-4,1.551373 0.002,3.799994 0.0031,5.996267 8.09e-4,1.533996 6.52e-4,1.237594 2.39e-4,0.453228 m -2.123912,2.511582 c -3.386345,-0.193292 -7.365332,-0.421996 -11.550542,-0.793505 -2.40242,-0.21432 -5.13292,-0.49742 -8.58838,-1.35732 -1.8996996,-0.4736 -3.4475196,-0.97895 -4.5217196,-1.35731 L 2.1463962,41.056708 c 0,0 7.0292455,-2.737748 9.6483628,-9.345946 C 14.413877,25.102564 8.3525027,4.4412772 8.3525027,4.4412772 L 14.78632,2.3586576"
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
      d="m 111.88281,78.695114 c -0.45555,1.821741 -1.13725,3.403287 -1.31734,3.514693 0.84321,0.51267 2.05282,-0.0878 2.05282,-0.0878 0.58369,-0.688898 0.9666,-2.117377 1.20812,-3.431752 m 2.23453,-0.05501 c 0.49366,1.711168 1.19573,3.18232 1.19573,3.18232 0,0 0.78881,0.947168 1.48466,0.61908 0.69585,-0.32544 0.99736,-0.711581 0.99736,-0.711581 -0.44102,-0.05374 -1.33166,-1.519358 -1.7644,-3.174719 m 0.0769,0.07403 c 0.32937,0.660919 0.60663,1.354833 0.75728,2.031847 0.0615,0.11085 0.12333,0.214241 0.18449,0.310581 0.001,0.0021 0.002,0.004 0.004,0.006 0.0603,0.0947 0.12018,0.18216 0.1788,0.261483 7.9e-4,0.0011 0.001,0.0021 0.002,0.003 0.007,0.01 0.0146,0.02 0.0217,0.0295 0.0287,0.0379 0.0563,0.0717 0.0842,0.105421 0.0188,0.02249 0.0374,0.0451 0.0558,0.0656 0.0229,0.02561 0.0455,0.0489 0.0677,0.0713 0.0209,0.02109 0.0412,0.0408 0.0615,0.0589 0.0238,0.02151 0.0481,0.0433 0.0708,0.0605 0.003,0.003 0.007,0.005 0.0103,0.008 0.032,0.02339 0.0625,0.0425 0.092,0.0569 0.009,0.005 0.0187,0.008 0.0279,0.01191 0.007,0.003 0.0136,0.006 0.0202,0.008 0.0169,0.005 0.0333,0.009 0.0491,0.0114 0,0 -0.0368,0.0457 -0.10697,0.114721 0.48809,-0.42858 0.69407,-1.738406 0.0101,-3.326282 m -10.68445,0.07139 c -0.087,0.719784 0.15324,1.534156 0.5339,2.494726 0,0 0.31957,0.704461 1.12655,1.16014 -0.0152,-0.0149 -0.0377,-0.01349 -0.0519,-0.03 0.0182,-0.009 0.0468,-0.0434 0.07,-0.0681 0.25024,-0.45326 0.49627,-1.06707 0.69044,-1.596631 -0.0856,-0.09819 -0.83742,-1.029933 -0.51018,-1.850425 m 1.94253,3.240836 c -0.47191,6.110079 -1.1829,14.618462 -1.603,16.297184 l 2.17766,-0.29921 c 0,0 0.76725,-13.74928 1.11591,-19.287257 m 0.406,-0.03541 c -0.079,1.365675 -0.1128,3.022551 0.0567,4.2867 0.34656,2.584632 0.44191,14.739707 0.79116,15.530817 l 1.88671,0.87333 c 0,0 -0.88388,-12.162919 -1.09554,-14.462148 -0.14682,-1.594789 -0.18794,-4.05642 -0.20102,-5.45651 -0.0897,-0.269853 -0.17737,-0.551553 -0.25878,-0.839347 M 87.143813,4.2807186 c -0.178393,-0.467667 6.305489,20.8545434 3.284766,28.1373344 -1.498909,3.613784 -3.840522,5.464764 -6.06165,7.05917 -2.448934,1.757933 -4.210006,2.306616 -4.210006,2.306616 M 141.47212,4.1948386 c 0.17839,-0.467667 -6.30549,20.8545434 -3.28477,28.1373344 1.49891,3.613784 3.84052,5.464764 6.06165,7.05917 2.44893,1.757933 4.21,2.306616 4.21,2.306616 M 92.226338,2.6382776 c 0,0 5.904445,14.2970694 9.116502,16.9131134 3.21206,2.616044 21.51384,2.357366 25.21793,0 3.70409,-2.357366 10.05445,-17.2574874 10.05445,-17.2574874 M 85.112657,74.04789 c 1.07421,0.37835 2.62202,0.88371 4.52173,1.35731 3.45545,0.8599 6.18595,1.143 8.58837,1.35731 6.289153,0.55827 12.112633,0.79375 16.048303,0.79507 3.93568,0.001 9.75916,-0.2368 16.04831,-0.79507 2.40241,-0.21431 5.13291,-0.49741 8.58837,-1.35731 1.89706,-0.47096 3.44752,-0.97631 4.52173,-1.35731 M 92.813322,2.1678196 c 0,0 5.849811,13.7638324 9.061868,16.3798764 3.21206,2.616044 20.5601,2.357366 24.26419,0 3.70408,-2.357366 9.622,-16.3839464 9.622,-16.3839464 l 6.5277,2.129581 c 0,0 -6.05694,20.6796144 -3.43782,27.2878124 2.61912,6.608198 9.68213,9.49416 9.68213,9.49416 l -5.00867,34.025623 c -1.07421,0.381 -2.62467,0.88636 -4.52173,1.35731 -3.45546,0.8599 -6.18596,1.143 -8.58837,1.35732 -6.28915,0.55827 -12.11263,0.79639 -16.05096,0.79507 -3.93832,-10e-4 -9.76179,-0.2368 -16.050943,-0.79507 -2.40242,-0.21432 -5.13292,-0.49742 -8.58838,-1.35732 -1.8997,-0.4736 -3.44752,-0.97895 -4.52172,-1.35731 L 80.115581,40.929179 c 0,0 7.029245,-2.737748 9.648363,-9.345946 C 92.383062,24.975035 86.321687,4.3137486 86.321687,4.3137486 l 6.433818,-2.08262"
    />
    <path
      key="folds"
      opacity={0.3}
      d="m 89.414103,3.2884946 c -0.160362,-0.160362 8.176004,20.5190484 9.37078,32.6760724 1.612027,16.402602 0.548439,40.878153 0.548439,40.878153 M 139.35077,3.3278116 c 0.16036,-0.160362 -8.17601,20.5190494 -9.37078,32.6760734 -1.61203,16.402602 -0.54844,40.878153 -0.54844,40.878153"
    />
  </>
)
