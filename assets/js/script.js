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

// Eventos de sincronização: permitem executar instruções ou funções em intervalos de tempo 
function blink() {
  var intervalo = 0; // determinar a frequência com que a lâmpada vai piscar 
  var contador = 0; // usar dentro da estrutura while 

  // Enquando contador for menor que 10 a lâmpada vai piscar 10 vezes  
  while(contador < 10) {
    intervalo += 300; // intervalo é inicado com 0, += soma 300 ao 0. No próxim laço intervalo passa a valer 600. Soma 300 a cada looping 
    setTimeout("document.getElementById('lamp').src='/assets/images/on.png';",intervalo); // método para trocar a imagem da lâmpada a cada intervalo. Intervalo é incremento a 300milisegundos a cada loop. 
    setTimeout("document.getElementById('lamp').src='/assets/images/off.png';",intervalo);
    contador++;
  }
}