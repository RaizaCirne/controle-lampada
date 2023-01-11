//Desafio: Receber como entrada a nota e mostrar no console o conceito como saída.
const nota = 9.8;

if (nota >= 9 && nota <= 10) {
  console.log("A");
}

if (nota >= 7 && nota <= 8.9) {
  console.log("B");
}

if (nota >= 5 && nota <= 6.9) {
  console.log("C");
}

if (nota >= 4.5 && nota <= 4.9) {
  console.log("D");
}

if (nota < 4.5) {
  console.log("F");
}

console.log("Fim!");
