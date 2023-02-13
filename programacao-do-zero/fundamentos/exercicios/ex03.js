function calcularSalario(quantidadeHorasMes, ValorPorHora) {
  return quantidadeHorasMes * ValorPorHora;
}

console.log(`Salário é igual a R$ ${calcularSalario(150, 40.5)}`);
