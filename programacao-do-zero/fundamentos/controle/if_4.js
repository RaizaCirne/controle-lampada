// Desafio: O que tem de errado no código?
const nota = 2.3;

if (nota >= 9); 
// Erro de ponto e vírgula (;) sentença de código vazia 
// bloco sem propósito, pois o if está agindo em cima da sentença de código vazia e não em cima do bloco. 

{ 
  console.log("Quadro de Honra!");
  console.log("Parabéns!");
}

console.log("Fim!");

// OBS: Não colocar ponto e vírgula (;) nas estruturas de controle. 
// As estuturas de controle com excessão de uma, todas elas não devem ser colocadas ponto e vírgula. 
// Uma sentença de código vazia é algo válido dentro da linguagem.