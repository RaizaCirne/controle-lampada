const lampada = document.getElementById('lamp');


// Acender lâmpada
const lightUp = document.getElementById('bt-on')
function on() {
  lightUp.addEventListener('click', () => {
    lampada.src = '/assets/images/on.jpg';
  })
}

// Apagar lâmpada
const toSwitchOff = document.getElementById('bt-off'); 
function off() {
  toSwitchOff.addEventListener('click', () => {
    lampada.src = '/assets/images/off.jpg';
  })
}

// Piscar lâmpada 
const blinkLamp = document.getElementById('blink-blink')
function blink() {
  blinkLamp.addEventListener('click', () => {
    // add o que vai acontecer
  })
}

