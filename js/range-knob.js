//
//  Range Knob Functions
//
//  The range knob functions of the piano
//

const rangeKnobs = document.querySelectorAll('.range-knob')

let currentKnob

let initX, initY
let deltaX, deltaY
let currentRotation = -157.5
let targetControl

function pointerDownHandler() {
  initX = event.x
  initY = event.y

  currentKnob = event.target

  currentRotation = parseFloat(event.target.dataset['currentOffset'], 10) || -157.5

  targetControl = document.querySelector(`#${ event.target.dataset['control'] }`)

  document.addEventListener('pointermove', pointerMoveHandler, false)
  document.addEventListener('pointerup', pointerEndHandler, false)
  document.addEventListener('pointercancel', pointerEndHandler, false)
}

function pointerMoveHandler() {
  deltaX = event.x - initX
  deltaY = event.y - initY

  let newAngle = currentRotation + (2 * deltaX) - (2 * deltaY)

  if (newAngle >= 157.5) {
    newAngle = 157.5
  } else if (newAngle <= -157.5) {
    newAngle = -157.5
  }

  currentKnob.style.transform = `rotate(${ newAngle }deg)`
  currentKnob.dataset['currentOffset'] = newAngle


  let currentPercent = (newAngle + 157.5) * (100 / 315)
  let newSliderValue = parseFloat((currentPercent * targetControl.max / 100) + targetControl.min)

  targetControl.value = newSliderValue

  switch (currentKnob.dataset['control']) {
    case 'attack':
      attackTime = newSliderValue
      break;
    case 'decay':
      decayTime = newSliderValue
      break;
    case 'sustain':
      sustainLevel = newSliderValue
      break;
    case 'release':
      releaseTime = newSliderValue
      break;
    default:
      break;
  }
}

function pointerEndHandler() {
  document.removeEventListener('pointermove', pointerMoveHandler, false)
  document.addEventListener('pointerup', pointerEndHandler, false)
  document.addEventListener('pointercancel', pointerEndHandler, false)
}

rangeKnobs.forEach((knob) => {
  knob.addEventListener('pointerdown', pointerDownHandler, false)
})
