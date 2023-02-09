// Função construtora (Classe) -> Objeto
function Produto() {
  console.log(this);
}

const p1 = new Produto();

console.log(typeof p1); 