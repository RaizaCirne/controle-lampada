const lampada = document.getElementById('lamp');


// Acender lâmpada
const lightUp = document.getElementById('bt-on')
function on() {
  lightUp.addEventListener('click', () => {
    lampada.src = '/assets/images/on.png';
  })
}

// Apagar lâmpada
const toSwitchOff = document.getElementById('bt-off'); 
function off() {
  toSwitchOff.addEventListener('click', () => {
    lampada.src = '/assets/images/off.png';
  })
}

// Piscar lâmpada 
const blinkLamp = document.getElementById('blink-blink')
function blink() {
  blinkLamp.addEventListener('click', () => {
    // add o que vai acontecer
  })
}

