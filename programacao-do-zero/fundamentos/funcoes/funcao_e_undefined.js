// Função não vai retornar nenhum dado como resposta da chamada
function semRetorno() {
  console.log("Função foi chamada!");
}

// Como pegar retorno da função e atribuir pra uma variável?

let a = 3;
let b = a * 7 + 10; // expressão inicializando o valor da variável b
let c = semRetorno(); //chamada da função semRetorno() e atribuindo resultado a variável c
let d;

console.log(a, b, c, d);

// Mesmo quando temos uma função que não retorna nada, ainda podemos chamar o código como retornasse algo, e se de fato não retornar nada, o valor retornado será undefined. Que é a mesma coisa quando definimos uma variável e não inicializamos a variável.
