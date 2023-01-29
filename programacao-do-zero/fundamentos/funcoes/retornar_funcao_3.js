//Princípio de programação funcional: Currying

// Uma função que recebe um ou mais parâmetros
function somar1(a, b) {
  return a + b;
}

console.log(somar1(5, 4));

// Criando função que retorna outra função - passando argumentos de forma parcial
function somar2(a) {
  return function (b) {
    return a + b;
  }
}

console.log(somar2(5)(4));

// Criando outra função baseada na função somar2 com o parãmetro a definido pra 10.
const somarMais10 = somar2(10);
console.log(somarMais10(5));
console.log(somarMais10(15));

