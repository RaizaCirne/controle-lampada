// Percorrer elementos do array de forma decrescente
// Percorrer o array começando a partir do penúltimo elemento, pulando de 2 em 2.
// 9, 7, 5, 3, 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 9; i < numeros.length && i > 0; i -= 2) {
  console.log(i);
}
