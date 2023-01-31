const notas = [7, 8, 3, 5, 10, 9, 8, 8];

// foreach: forma mais simples de percorrer cada um dos elementos sem se preocupar com a variável que vai controlar o laço
for (let nota of notas) {
  console.log(nota);
}

// Outra forma
let valores = '';

// foreach
for (let nota of notas) { // of acessa valores 
  valores += nota + ' ';
}

console.log(valores);

// Percorrer indices dos elementos dentro do array 
let indices = '';

for(let indice in notas ) { // in acessa os indices
  indices += indice + ' '; 
}

console.log(indices);