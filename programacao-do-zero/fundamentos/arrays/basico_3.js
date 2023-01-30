console.log(typeof console);
console.log(typeof console.log); // Acessando função log que pertence ao objeto console

const numeros = [1, 2, 3];

console.log(typeof numeros); // Exibe o tipo - array é um objeto

//função push: método que adiciona novos elementos dentro do array
// Acessando a função push que pertence ao objeto array  
numeros.push(4); //Adiciona o valor 4 dentro do array
numeros.push(5); //Adiciona o valor 5 dentro do array
numeros.push(10.8); //Adiciona o valor 10.98 dentro do array

console.log(numeros); // Exibe o array com os elementos que foram adicionados com a função push
console.log(numeros.length); // Atributo length: Exibe quantos elementos tem dentro do array
