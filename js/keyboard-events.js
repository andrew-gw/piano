//
//  Keyboard Functions
//
//  The keyboard functions of the piano
//

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    // case 'Meta':
    //   break;
    // case 'Control':
    //   break;
    // case 'Alt':
    //   break;
    case 'a':
      if (!osc) {
        playNote(262);
        document.querySelector('input[value=C4]').classList.add('active')
      }
      break;
    case 'w':
      if (!osc) {
        playNote(278);
        document.querySelector('input[value="C#4"]').classList.add('active')
      }
      break;
    case 's':
      if (!osc) {
        playNote(294);
        document.querySelector('input[value=D4]').classList.add('active')
      }
      break;
    case 'e':
      if (!osc) {
        playNote(312);
        document.querySelector('input[value="D#4"]').classList.add('active')
      }
      break;
    case 'd':
      if (!osc) {
        playNote(330);
        document.querySelector('input[value=E4]').classList.add('active')
      }
      break;
    case 'f':
      if (!osc) {
        playNote(349);
        document.querySelector('input[value=F4]').classList.add('active')
      }
      break;
    case 't':
      if (!osc) {
        playNote(371);
        document.querySelector('input[value="F#4"]').classList.add('active')
      }
      break;
    case 'g':
      if (!osc) {
        playNote(392);
        document.querySelector('input[value=G4]').classList.add('active')
      }
      break;
    case 'y':
      if (!osc) {
        playNote(416);
        document.querySelector('input[value="G#4"]').classList.add('active')
      }
      break;
    case 'h':
      if (!osc) {
        playNote(440);
        document.querySelector('input[value=A4]').classList.add('active')
      }
      break;
    case 'u':
      if (!osc) {
        playNote(466);
        document.querySelector('input[value="A#4"]').classList.add('active')
      }
      break;
    case 'j':
      if (!osc) {
        playNote(494);
        document.querySelector('input[value=B4]').classList.add('active')
      }
      break;
    case 'k':
      if (!osc) {
        playNote(524);
        document.querySelector('input[value=C5]').classList.add('active')
      }
      break;
    case 'o':
      if (!osc) {
        playNote(554);
        document.querySelector('input[value="C#5"]').classList.add('active')
      }
      break;
    case 'l':
      if (!osc) {
        playNote(587);
        document.querySelector('input[value=D5]').classList.add('active')
      }
      break;
    case 'p':
      if (!osc) {
        playNote(622);
        document.querySelector('input[value="D#5"]').classList.add('active')
      }
      break;
    case ';':
      if (!osc) {
        playNote(659);
        document.querySelector('input[value=E5]').classList.add('active')
      }
      break;
    case '\'':
      if (!osc) {
        playNote(698);
        document.querySelector('input[value=F5]').classList.add('active')
      }
      break;
    default:
      // console.log(event.key)
      break;
  }
})

document.addEventListener('keyup', (event) => {
  stopNote()

  if (document.querySelector('[type=button].active')) {
    document.querySelector('[type=button].active').classList.remove('active')
  }
})
