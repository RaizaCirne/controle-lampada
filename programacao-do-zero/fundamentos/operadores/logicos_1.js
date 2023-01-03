let temDinheiro = false;
let estaEnsolarado = false;
let carroEstaNaGaragem = false;

let resultadoE = "#1 (AND) - Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "#2 (OR) - Vai pro shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);
