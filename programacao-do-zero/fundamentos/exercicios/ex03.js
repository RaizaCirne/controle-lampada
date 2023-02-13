// function calcularSalario(quantidadeHorasMes, ValorPorHora) {
//   return quantidadeHorasMes * ValorPorHora;
// }

// console.log(`Salário é igual a R$ ${calcularSalario(150, 40.5)}`);

function calcularSalario(quantidadeHorasMes, ValorPorHora) {
  const salarioBruto = quantidadeHorasMes * ValorPorHora;
  const salarioLiquido = salarioBruto - (salarioBruto * 30) / 100;

  return `Salário é igual a R$ ${salarioLiquido}`;
}

console.log(calcularSalario(180, 60));
