const numeros = [10, 20, 30];

// 3 pares chave: valor, 
const produto = {
  nome: "Caneta",
  preco: 9.99,
  desconto: 0.2
};

console.log(numeros[0]); //Acessando elemento 10 dentro do array

//Acessando o atributo dentro do objeto
console.log(produto["nome"]); 
console.log(produto["preco"]); 
console.log(produto["desconto"]); 

//Acessando atributo dentro do objeto através da notação ponto -> é mais usado
console.log(produto.nome); 
console.log(produto.preco); 
console.log(produto.desconto); 

//Verificando o tipo da constante produto: tipo objeto
console.log(typeof produto);
