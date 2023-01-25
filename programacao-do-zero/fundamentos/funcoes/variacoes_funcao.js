// #1 Função COM Parâmetros e COM Retorno
// -> função somar recebe um valor a e um valor b, e essa função vai retornar a soma de a + b.
function somar(a, b) {
  return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
// ou
console.log(`O resultado final é: ${somar(30, 56)}`);

// #2 Função COM Parâmetros e SEM Retorno
function exibirMultiplicacao(a, b) {
  console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #3 Função SEM Parâmetros e COM Retorno
// Chamando a função e retornando algo útil
function retornarDataAtual() {
  return new Date();
}

console.log(retornarDataAtual());

// #4 Função SEM Parâmetros e SEM Retorno
// Exibindo no terminal a hora atual
function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual();
