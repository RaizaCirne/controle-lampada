// Dois exemplos de laço infinito usando for

//for (;;) {
//}

//for (; true ; ) {
//}

let controle = 1; 

// não necessariamente precisa informar as 3 partes, mas precisa colocar ;
for (; controle <= 10 ;) {
  console.log(controle);
  controle++;
}

console.log('Fim!');