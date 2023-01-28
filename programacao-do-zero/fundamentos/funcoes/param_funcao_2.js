function somar(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
}

console.log(somar(1, 2, 3, 4, 5, 6)); // Não considere parâmetros a mais
console.log(somar(1, 2, 3, 4)); // 10
console.log(somar(1, 2, 3)); // 6 
console.log(somar(1, 2)); // 3
console.log(somar(1)); // 1
console.log(somar()); // 0

console.log("Fim!")

