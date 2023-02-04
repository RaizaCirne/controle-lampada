const numeros = [10, 20, 30];

// 3 pares chave: valor, 
const produto = {
  nome: "Caneta",
  preco: 9.99,
  desconto: 0.2
};

console.log(numeros[0]); //Acessando elemento 10 dentro do array

console.log(produto["nome"]); //Acessando o atributo nome dentro do objeto
console.log(produto["preco"]); // //Acessando o atributo preço dentro do objeto
console.log(produto["desconto"]); // //Acessando o atributo desconto dentro do objeto

console.log(produto.nome); //Acessando atributo dentro do objeto através da notação ponto -> é mais usado
console.log(produto.preco); //Acessando atributo dentro do objeto através da notação ponto -> mais usado
console.log(produto.desconto); //Acessando atributo dentro do objeto através da notação ponto -> mais usado

//Verificando o tipo da constante produto: tipo objeto
console.log(typeof produto);
