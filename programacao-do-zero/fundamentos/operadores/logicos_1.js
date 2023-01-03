let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = "#1 - Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "#2 - Vai pro shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem; 
console.log(resultadoOU);