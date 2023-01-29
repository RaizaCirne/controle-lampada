function retornaUmaFuncao () {
  return function () {
    return function () {
      return "Boa tarde!";
    }
  }
}

console.log(retornaUmaFuncao); // Retorna a própria função sem executar
console.log(retornaUmaFuncao()); // Retorna uma função anônima 
console.log(retornaUmaFuncao()()); // Retorna uma função anônima 
console.log(retornaUmaFuncao()()()); // Recebe o resultado da função interna "Boa tarde!"

