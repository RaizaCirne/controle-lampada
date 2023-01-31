const numeros = [1, 2, 356, 4, 5, 6, 11, 45];

// Percorrendo todos os elementos do array
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// Percorrendo elementos do array de 2 em 2
for (let i = 0; i < numeros.length; i += 2) {
  console.log(numeros[i]);
}

// Percorrendo elementos do array a partir do índice 1
for (let i = 1; i < numeros.length; i++) {
  console.log(numeros[i]);
}
