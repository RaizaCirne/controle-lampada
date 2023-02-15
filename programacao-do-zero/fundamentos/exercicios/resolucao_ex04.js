// Resolução 01: 
function receberNomeDoMes(numero) {
  switch(numero){
  case 1:
  return "janeiro";
  case 2:
  return "fevereiro";
  case 3:
  return "março";
  case 4:
  return "abril";
  case 5:
  return "maio";
  case 6:
  return "junho";
  case 7:
  return "julho";
  case 8:
  return "agosto";
  case 9:
  return "setembro";
  case 10:
  return "outubro";
  case 11:
  return "novembro";
  case 12:
  return "dezembro";
 }
}

console.log(receberNomeDoMes(1));
console.log(receberNomeDoMes(2));
console.log(receberNomeDoMes(3));
console.log(receberNomeDoMes(4));
console.log(receberNomeDoMes(5));
console.log(receberNomeDoMes(6));
console.log(receberNomeDoMes(7));
console.log(receberNomeDoMes(8));
console.log(receberNomeDoMes(9));
console.log(receberNomeDoMes(10));
console.log(receberNomeDoMes(11));
console.log(receberNomeDoMes(12));

// Resolução 02:
function receberNomeDoMes(numero) {
  const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
  'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  return mapeamento[--numero];
  }
  
console.log(receberNomeDoMes(1));
console.log(receberNomeDoMes(2));
console.log(receberNomeDoMes(3));
console.log(receberNomeDoMes(4));
console.log(receberNomeDoMes(5));
console.log(receberNomeDoMes(6));
console.log(receberNomeDoMes(7));
console.log(receberNomeDoMes(8));
console.log(receberNomeDoMes(9));
console.log(receberNomeDoMes(10));
console.log(receberNomeDoMes(11));
console.log(receberNomeDoMes(12));