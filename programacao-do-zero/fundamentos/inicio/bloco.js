/* Definindo sentença de código que está dentro de um bloco de código.
*Para agrupar várias sentenças de código dentro de um único bloco, usar um par de chaves.*/

// Temos um código que tem 5 sentenças de código e tem 2 blocos.
{
  console.log("Passo #01");
  console.log("Passo #02");
  console.log("Passo #03");
}

{
  console.log("Passo #04");
  console.log("Passo #05");
}

// É possível gerar um bloco de código com sentenças vazias 
{
  ;
  ;
  ;
}

// É possível criar um bloco de código dentro do outro 
// Blocos que são delimitados por chaves sempre vem em pares pra definir um bloco. 
// Mas não há sentido criar sentenças vazias
{
  {
    {
      {
        ;
        ;
        ;
      }
    }
  }
}
console.log("Fim");