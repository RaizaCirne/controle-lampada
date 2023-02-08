// Objeto data
// Atributos: dia, mes e ano
// Método: exibir -> "dia/mes/ano"

const data = {
  dia: 07,
  mes: 11,
  ano: 1993,
  exibirData: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(data.exibirData());
