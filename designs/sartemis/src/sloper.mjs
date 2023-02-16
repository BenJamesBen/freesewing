import { pluginBundle } from '@freesewing/plugin-bundle'
import { pluginBust } from '@freesewing/plugin-bust'

function draftSloper({
  measurements,
  options,
  Point,
  Path,
  points,
  paths,
  Snippet,
  snippets,
  complete,
  sa,
  paperless,
  macro,
  part,
}) {
  const paperWidth = measurements.bust / 2 + 250
  const paperLength = measurements.hpsToWaistFront + measurements.waistToFloor - 300

  const paperLeftEdge = 0
  const paperRightEdge = paperWidth
  const paperTopEdge = 0
  const paperBottomEdge = paperLength

  // Bounding box (paper)
  points.paperTopLeft = new Point(paperLeftEdge, paperTopEdge)
  points.paperTopRight = new Point(paperRightEdge, paperTopEdge)
  points.paperBottomLeft = new Point(paperLeftEdge, paperBottomEdge)
  points.paperBottomRight = new Point(paperRightEdge, paperBottomEdge)
  paths.bbox = new Path().move(points.paperTopLeft).move(points.paperBottomRight)

  // Knee line, center back line, center front line
  const kneeLine = paperLength - 50
  const centerBackLine = 50
  const centerFrontLine = paperWidth - 50

  points.cbKnee = new Point(centerBackLine, kneeLine)
  points.cfKnee = new Point(centerFrontLine, kneeLine)
  paths.kneeLine = new Path()
    .move(new Point(paperLeftEdge, kneeLine))
    .line(new Point(paperRightEdge, kneeLine))
    .setClass('help various')
    .setText('Knee Line', 'center')

  paths.centerBack = new Path()
    .move(new Point(centerBackLine, paperTopEdge))
    .line(new Point(centerBackLine, paperBottomEdge))
    .setClass('help various')
    .setText('Center Back', 'center')

  paths.centerFront = new Path()
    .move(new Point(centerFrontLine, paperTopEdge))
    .line(new Point(centerFrontLine, paperBottomEdge))
    .setClass('help various')
    .setText('Center Front', 'center')

  // Waistline and Hip Line

  const waistLine = kneeLine - measurements.waistToKnee
  paths.waistLine = new Path()
    .move(new Point(paperLeftEdge, waistLine))
    .line(new Point(paperRightEdge, waistLine))
    .setClass('help various')
    .setText('Waist Line', 'center')

  const hipLine = waistLine + measurements.waistToHips
  paths.hipLine = new Path()
    .move(new Point(paperLeftEdge, hipLine))
    .line(new Point(paperRightEdge, hipLine))
    .setClass('help various')
    .setText('Hip Line', 'center')

  // Armhole line

  const armholeEase = 20
  const armholeLine = waistLine - measurements.waistToUnderbust + armholeEase
  paths.armholeLine = new Path()
    .move(new Point(paperLeftEdge, armholeLine))
    .line(new Point(paperRightEdge, armholeLine))
    .setClass('help various')
    .setText('Armhole Line', 'center')

  // Side seam construction lines
  const backBustValue = measurements.bust / 4 + options.cup * 12.5
  const frontBustValue = measurements.bust / 4 + options.cup * 12.5
  const backSeam = centerBackLine + backBustValue
  const frontSeam = centerFrontLine - frontBustValue
  paths.backSeamLine = new Path()
    .move(new Point(backSeam, armholeLine))
    .line(new Point(backSeam, hipLine))
    .setClass('help various')
  paths.frontSeamLine = new Path()
    .move(new Point(frontSeam, armholeLine))
    .line(new Point(frontSeam, hipLine))
    .setClass('help various')

  // Hip points
  //
  const bustHipsDifference = (measurements.bust - measurements.hips) / 2
  points.backHip = new Point(backSeam - bustHipsDifference, hipLine).setCircle(1)
  points.frontHip = new Point(frontSeam + bustHipsDifference, hipLine).setCircle(1)

  // Temporary Shoulder lines
  //
  const backTemporaryShoulderLine = waistLine - measurements.hpsToWaistBack
  paths.backTemporaryShoulderLine = new Path()
    .move(new Point(centerBackLine, backTemporaryShoulderLine))
    .line(new Point(backSeam, backTemporaryShoulderLine))
    .setClass('help various')

  const frontTemporaryShoulderLine = waistLine - measurements.hpsToWaistFront
  paths.frontTemporaryShoulderLine = new Path()
    .move(new Point(centerFrontLine, frontTemporaryShoulderLine))
    .line(new Point(frontSeam, frontTemporaryShoulderLine))
    .setClass('help various')

  // Waist Darts
  //
  const halfBustValue = measurements.bustSpan / 2
  const frontDartLine = centerFrontLine - halfBustValue
  const backDartLine = centerBackLine + halfBustValue - 5
  paths.frontDartLine = new Path()
    .move(new Point(frontDartLine, armholeLine))
    .line(new Point(frontDartLine, hipLine))
    .setClass('help various')
  paths.backDartLine = new Path()
    .move(new Point(backDartLine, armholeLine))
    .line(new Point(backDartLine, hipLine))
    .setClass('help various')

  const originalDartWidth = (measurements.bust / 2 - measurements.waist / 2) / 4
  const sideDartWidth = originalDartWidth + 5
  const frontBackDartWidth = originalDartWidth - 5
  const halfFrontBackDartWidth = frontBackDartWidth / 2

  points.backDartLeft = new Point(backDartLine - halfFrontBackDartWidth, waistLine).setCircle(1)
  points.backDartRight = new Point(backDartLine + halfFrontBackDartWidth, waistLine).setCircle(1)
  points.frontDartLeft = new Point(frontDartLine - halfFrontBackDartWidth, waistLine).setCircle(1)
  points.frontDartRight = new Point(frontDartLine + halfFrontBackDartWidth, waistLine).setCircle(1)

  points.backSideDartLeft = new Point(backSeam - sideDartWidth, waistLine).setCircle(1)
  points.frontSideDartRight = new Point(frontSeam + sideDartWidth, waistLine).setCircle(1)

  points.backDartBottom = new Point(backDartLine, hipLine - 25).setCircle(1)
  points.backDartTop = new Point(backDartLine, armholeLine).setCircle(1)
  points.frontDartBottom = new Point(frontDartLine, hipLine).setCircle(1)
  points.frontDartTop = new Point(frontDartLine, armholeLine + 25).setCircle(1)

  paths.backDart = new Path()
    .move(points.backDartTop)
    .line(points.backDartLeft)
    .line(points.backDartBottom)
    .line(points.backDartRight)
    .close()

  paths.frontDart = new Path()
    .move(points.frontDartTop)
    .line(points.frontDartLeft)
    .line(points.frontDartBottom)
    .line(points.frontDartRight)
    .close()

  points.backSideDartTop = new Point(backSeam, armholeLine)
  points.backSideDartBottom = points.backHip.clone()
  points.frontSideDartTop = new Point(frontSeam, armholeLine)
  points.frontSideDartBottom = points.frontHip.clone()

  paths.backSideDartConstruction = new Path()
    .move(points.backSideDartLeft)
    .line(points.backSideDartBottom)
    .setClass('help various')
  paths.frontSideDartConstruction = new Path()
    .move(points.frontSideDartRight)
    .line(points.frontSideDartBottom)
    .setClass('help various')

  // Control points to curve bottom of side darts
  points.backSideDartPoint = paths.backSideDartConstruction.shiftAlong(80).shift(0, 10).setCircle(1)
  points.frontSideDartPoint = paths.frontSideDartConstruction
    .shiftAlong(80)
    .shift(180, 10)
    .setCircle(1)
  points.backSideDartCp1 = points.backSideDartPoint.shift(90, 30)
  points.backSideDartCp2 = points.backSideDartPoint.shift(-90, 30)
  points.frontSideDartCp1 = points.frontSideDartPoint.shift(90, 30)
  points.frontSideDartCp2 = points.frontSideDartPoint.shift(-90, 30)

  paths.backSideDart = new Path()
    .move(points.backSideDartTop)
    .line(points.backSideDartLeft)
    .curve(points.backSideDartLeft, points.backSideDartCp1, points.backSideDartPoint)
    .curve(points.backSideDartPoint, points.backSideDartCp2, points.backSideDartBottom)

  paths.frontSideDart = new Path()
    .move(points.frontSideDartTop)
    .line(points.frontSideDartRight)
    .curve(points.frontSideDartRight, points.frontSideDartCp1, points.frontSideDartPoint)
    .curve(points.frontSideDartPoint, points.frontSideDartCp2, points.frontSideDartBottom)

  // Side Seam

  points.backSideKnee = new Point(points.backHip.x, kneeLine)
  points.frontSideKnee = new Point(points.frontHip.x, kneeLine)

  paths.backSideSeam = new Path().move(points.backSideKnee).line(points.backHip)
  paths.frontSideSeam = new Path().move(points.frontHip).line(points.frontSideKnee)

  // Bottom seam

  points.backCenterKnee = new Point(centerBackLine, kneeLine)
  paths.backBottomSeam = new Path().move(points.backCenterKnee).line(points.backSideKnee)

  points.frontCenterKnee = new Point(centerFrontLine, kneeLine)
  paths.frontBottomSeam = new Path().move(points.frontCenterKnee).line(points.frontSideKnee)

  //Partial center seams

  points.backCenterArmhole = new Point(centerBackLine, armholeLine)
  points.frontCenterArmhole = new Point(centerFrontLine, armholeLine)

  paths.backCenterSeam = new Path().move(points.backCenterArmhole).line(points.backCenterKnee)

  paths.frontCenterSeam = new Path().move(points.frontCenterArmhole).line(points.frontCenterKnee)

  // Shoulders

  points.backShoulder1 = new Point(centerBackLine + 60, backTemporaryShoulderLine)
  points.backShoulder2 = new Point(centerBackLine + 150, backTemporaryShoulderLine + 30)

  points.frontShoulder1 = new Point(centerFrontLine - 65, frontTemporaryShoulderLine)
  points.frontShoulder2 = new Point(centerFrontLine - 155, frontTemporaryShoulderLine + 30)

  const neckRadius = measurements.neck / 2 / Math.PI
  const neckDiameter = neckRadius * 2
  const shoulderLength = (measurements.shoulderToShoulder - neckDiameter) / 2

  points.backShoulder3 = points.backShoulder1
    .clone()
    .shiftTowards(points.backShoulder2, shoulderLength + 10)
  points.frontShoulder3 = points.frontShoulder1
    .clone()
    .shiftTowards(points.frontShoulder2, shoulderLength)

  paths.backShoulder = new Path().move(points.backShoulder1).line(points.backShoulder3)
  paths.frontShoulder = new Path().move(points.frontShoulder1).line(points.frontShoulder3)

  // Neck

  points.backCenterNeck = new Point(centerBackLine, backTemporaryShoulderLine + 10)
  points.frontCenterNeck = new Point(centerFrontLine, frontTemporaryShoulderLine + 30)

  points.backNeckCp1 = points.backShoulder1.shift(-90, 13)
  points.frontNeckCp1 = points.frontShoulder1.shift(-90, 33)

  paths.backNeck = new Path()
    .move(points.backShoulder1)
    .curve_(points.backNeckCp1, points.backCenterNeck)
  paths.frontNeck = new Path()
    .move(points.frontShoulder1)
    .curve_(points.frontNeckCp1, points.frontCenterNeck)

  // Partial seam neck to armhole

  paths.backCenterSeam2 = new Path().move(points.backCenterNeck).line(points.backCenterArmhole)
  paths.frontCenterSeam2 = new Path().move(points.frontCenterNeck).line(points.frontCenterArmhole)

  // Complete?
  if (complete) {
    if (sa) {
    }
  }

  // Paperless?
  if (paperless) {
  }

  return part
}

export const sloper = {
  name: 'sartemis.sloper',
  measurements: [
    'chest',
    'waistToFloor',
    'hpsToWaistFront',
    'hpsToWaistBack',
    'waistToKnee',
    'waistToHips',
    'waistToUnderbust',
    'hips',
    'bustSpan',
    'waist',
    'neck',
    'shoulderToShoulder',
  ],
  options: {
    cup: { count: 2, min: 1, max: 10, menu: 'size' },
  },
  plugins: [pluginBundle, pluginBust],
  draft: draftSloper,
}
