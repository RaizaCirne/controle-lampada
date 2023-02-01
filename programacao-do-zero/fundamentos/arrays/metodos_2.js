const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// numeros.splice(1º param , 2º param) -> Remove elementos dentro do array. 
// 1º parâmetro é o indice
// 2º parâmetro é a quantidade de elementos que desejo excluir

numeros.splice(1, 2); // Começando a partir do indice 1, excluindo 2 elementos 
console.log(numeros); // [ 1, 4, 5, 6, 7, 8 ]

// numeros.pop() -> Remove o último elemento do array 

console.log(numeros.pop()); // Exclui o último elemento do array e mostra o que foi excluido -> 8 
console.log(numeros.pop()); // Exclui mais um elemento do array e mostra o que foi excluido -> 7
console.log(numeros); // Mostra os elementos alterados pelos métodos. 

//OBS: métodos splice() e pop() causaram alteração no array
// São metodos ou funções que pertecem a um objeto e geram impacto. 
