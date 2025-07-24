//
//  Mouse Events
//
//  The mouse functions of the piano
//

document.addEventListener('pointerdown', () => {
  if (event.target.type === 'button') {
    playNote(event.target.dataset['hz'])
  }
})

document.addEventListener('pointerup', () => {
  stopNote()
})


document.addEventListener('pointercancel', () => {
  stopNote()
})
