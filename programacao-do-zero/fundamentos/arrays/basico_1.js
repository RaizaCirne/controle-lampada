// Declarando array
//              0    1    2   3    4    5
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

// Acessando elementos do array
console.log(notas); // Exibe elementos do array
console.log(notas[3]); // Acessa elemento de índice 3, que é a nota 9.5
console.log(notas[5]); // Acessa elemento de índice 5, que é a nota 5.8
console.log(notas[10]); // Elemento de índice 10 não faz parte do array, resultado é undefined.

// Alterando elementos do array
notas[4] = 8.7; // altera nota do índice 4
console.log(notas); // Exibe elementos do array com nota do índice 4 alterada
