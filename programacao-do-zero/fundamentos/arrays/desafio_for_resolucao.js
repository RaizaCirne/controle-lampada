const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = numeros.length - 2; i >= 0; i -= 2) {
  console.log(numeros[i]);
}


// OBS: tamanho do array - 2 pra acessar o penultimo elemento, portanto, let i = numeros.length - 2