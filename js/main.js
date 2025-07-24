//
//  Piano Main Functions
//
//  The main functions of the piano
//

let osc, gain, audioCtx
let oscType = 'sine'

audioCtx = new AudioContext()

// gain = audioCtx.createGain()

// gain.connect(audioCtx.destination)

document.querySelector('#osc-type').addEventListener('change', () => {
  oscType = event.target.value
})

let attackTime = 0.002
let decayTime = 2
let sustainLevel = 0
let releaseTime = 0.2

document.querySelector("#attack").addEventListener('input', () => {
  attackTime = parseFloat(event.target.value, 10)
})

document.querySelector("#decay").addEventListener('input', () => {
  decayTime = parseFloat(event.target.value, 10)
})

document.querySelector("#sustain").addEventListener('input', () => {
  sustainLevel = parseFloat(event.target.value, 10)
})

document.querySelector("#release").addEventListener('input', () => {
  releaseTime = parseFloat(event.target.value, 10)
})

function playNote(note) {
  osc = new OscillatorNode(audioCtx, {
    frequency: note,
    type: oscType,
  })

  gain = audioCtx.createGain()

  gain.connect(audioCtx.destination)

  osc.connect(gain)

  // gain.gain.cancelScheduledValues(audioCtx.currentTime)

  gain.gain.setValueAtTime(0, audioCtx.currentTime)

  gain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + attackTime)

  gain.gain.linearRampToValueAtTime(sustainLevel, audioCtx.currentTime + attackTime + decayTime)

  osc.start()
}


function stopNote() {
  if (osc) {
    // gain.gain.setValueAtTime(sustainLevel, audioCtx.currentTime)
    // gain.gain.linearRampToValueAtTime(sustainLevel, audioCtx.currentTime)
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + releaseTime)

    setTimeout(() => {
      osc.stop(audioCtx.currentTime + releaseTime)
      osc = false
    }, 10)
  }
}
