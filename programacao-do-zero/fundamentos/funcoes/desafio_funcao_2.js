//Criar uma função que vai receber um parâmetro (nota) e essa função vai retornar o conceito.

// Parâmetro (Nota) -> Retorno (Conceito)
// Conceito de A até F
// Se nao achar a partir da nota conceito, retornar nulo

function retornaConceito(nota) {
  if (nota == 10) {
    return "A+";
  } else if (nota >= 9 && nota < 10) {
    return "A";
  } else if (nota >= 8 && nota < 9) {
    return "B+";
  } else if (nota >= 7 && nota < 8) {
    return "B";
  } else if (nota >= 6 && nota < 7) {
    return "C+";
  } else if (nota >= 5 && nota < 6) {
    return "C";
  } else if (nota >= 4 && nota < 5) {
    return "D+";
  } else if (nota >= 3 && nota < 4) {
    return "D";
  } else if (nota >= 2 && nota < 3) {
    return "E+";
  } else if (nota >= 1 && nota < 2) {
    return "E";
  } else {
    return null;
  }
}

console.log(retornaConceito(10)); // A+
console.log(retornaConceito(9)); // A
console.log(retornaConceito(8)); // B+
console.log(retornaConceito(7)); // B
console.log(retornaConceito(6)); // C+
console.log(retornaConceito(5)); // C
console.log(retornaConceito(4)); // D+
console.log(retornaConceito(3)); // D
console.log(retornaConceito(2)); // E+
console.log(retornaConceito(1)); // E
console.log(retornaConceito()); // nulo
