// Funcionalidades relacionadas ao array 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

numeros[0] = 100; // Altera elemento de indice 0 para 100 
numeros.push(6); // Acrescenta valor 6 ao array

//numeros.includes() -> Diz determinado elemento pertence ou nao ao array 
//numeros.indexOf() -> Diz o index de determinado elemento 

console.log(numeros.indexOf(4)); // Diz que o indice do elemento 4 é o indice 3
console.log(numeros.indexOf(4, 4)); // Começa a partir do indice 4. Resultado -1 pois não encontrou outro 4 dentro do array
console.log(numeros.includes(10)); // Resultado será falso, pois 10 não está incluso no array
console.log(numeros.includes(6)); // Resultado será verdadeiro, pois 6 está incluso no array
console.log(numeros.join(" - ")); // Junta todos os elementos do array a partir de um determinado símbolo 
console.log(numeros); // Mostra o valor completo do array

const numeros2 = numeros.concat(7, 8, 9); // Gera um outro array e conseguimos concaten ar mais elementos dentro do array 
console.log(numeros2); // Mostra o novo array gerado concatenando com o array anterior