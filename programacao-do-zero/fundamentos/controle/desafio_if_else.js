const a = 10;
const b = 28;
const operacao = "*"; // + = * / %

let resultado;

if (a + b > 2 * b) {
  resultado = "Falso";
} else if (a - b < 2 * b) {
  resultado = "Verdadeiro";
} else if (a == b) {
  resultado = "Falso";
} else {
  resultado = "Verdadeiro";
}

console.log(resultado);
