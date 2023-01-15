const futuro = Date.now() + 2000; 
let quantidade = 0; 

while (Date.now() < futuro) {
  quantidade++;
}

console.log('Qtde: ' + quantidade); // quantidade de vezes que foi executado o laço while nos 10 segundos 