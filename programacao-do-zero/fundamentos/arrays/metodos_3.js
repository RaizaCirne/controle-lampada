const numeros = [10, 20, 30, 40];

function praCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}

// Passando função como parâmetro para o forEach pra percorrer cada um dos elementos
numeros.forEach(praCadaElemento);

// Passando uma função anônima diretamente como parâmetro para a função
numeros.forEach(function (el) {
  console.log(el);
});

// exemplo mostrando apenas o indice
numeros.forEach(function (_, i) {
  console.log(i);
});

// 1º forma de percorrer cada um dos itens de um array
// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// 2º forma de percorrer cada um dos elementos/valores
// for (let n of numeros) {
//   console.log(n);
// }

// 3º forma de percorrer cada um dos elementos/valores - A partir de um método que pertence ao array
// numeros.forEach(function () {
//   console.log("Dentro do forEach!"); // Executou a função a quantiade de vezes de acordo com a quantidade de elementos
// });
