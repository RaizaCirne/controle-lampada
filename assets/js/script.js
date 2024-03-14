// function acender() troca a imagem off.png pela on.png
function acender() {
  document.getElementById('lampada').src = 'assets/images/on.png';
}

// function apagar() troca a imagem on.png pela off.png
function apagar() {
  document.getElementById('lampada').src = 'assets/images/off.png'
}

// Evento de sincronização -> método setTimeout
function piscar() {
  let intervalo = 0; // determina a frequência que a lâmpada pisca
  let contador = 0; // Incrementa a cada laço enquanto a condição for menor que 5 
  while(contador < 10) {
    intervalo += 250; // variável intervalo soma 250 a cada loop
    setTimeout("document.getElementById('lampada').src = 'assets/images/on.png'", intervalo);
    intervalo += 250; 
    setTimeout("document.getElementById('lampada').src = 'assets/images/off.png'", intervalo);
    contador++;
  }
}