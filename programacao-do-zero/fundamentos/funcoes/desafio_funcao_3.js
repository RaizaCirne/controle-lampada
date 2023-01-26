const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function exibirMedia(nota1, nota3) {
  return (nota1 + nota3) / 2;
}

let media = exibirMedia(nota1, nota3);
console.log(`A média do aluno é: ${media}`);

function statusAluno(media) {
  if (media >= 7) {
    return "Aprovado!";
  } else if (media >= 4 && media < 7) {
    return "Recuperação!";
  } else {
    return "Reprovado!";
  }
}

console.log(`O aluno está ${statusAluno(7)}`);
console.log(`O aluno está de ${statusAluno(6.9)}`);
console.log(`O aluno está ${statusAluno(3)}`);
