// Resolução 1:
// function cumprimentar(nome) {
//   const saudacao = "Olá";
//   return [saudacao, nome].join(", ").concat("!");
// }

// Resolução 2:
// function cumprimentar(nome) {
//   return "Olá, " + nome + "!";
// }

// Resoluão 3: 
function cumprimentar(nome) {
  return `Olá, ${nome}!`
}

console.log(cumprimentar("Leonardo"));
console.log(cumprimentar("Maria"));
