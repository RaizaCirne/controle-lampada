const cliente = {
  codigo: 165332,
  nome: "Ana",
  vip: true,
  endereco: {
    logradouro: "Rua ABC",
    numero: 123,
    complemento: "Apto 101 Bloco B",
    pontosRef: [
      {nome: "Hospital X", muitoProximo: true}, 
      {nome: "Shopping Y", muitoProximo: false},
    ],
  },
  nomeFilhos: ["Bia", "Carlos", "Gabriel"], //Referenciando array dentro do objeto
};

console.log(cliente["endereco"]["logradouro"]); //Acessar logradouro que pertence ao endereço que pertence ao cliente
console.log(cliente.endereco.logradouro); //Acessar usando a notação ponto (mais usual);
console.log(cliente.endereco.pontosRef[0].muitoProximo); //Verificar se 1º ponto de referência é muito próximo
