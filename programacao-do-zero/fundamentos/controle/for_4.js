// [1, 1], [1, 2], [1, 3]
// [2, 1], [2, 2], [2, 3]
// [3, 1], [3, 2], [3, 3]

for (let i = 1; i <= 3 ; i++) {
  let linha = '';
  for (let j = 1; j <= 3; j++) {
    linha += ` [${i}, ${j}] `
  }
  console.log(linha);
}

// Quando temos 2 laços de repetição, o laço mais externo executa uma vez, 
// O laço interno executa todas as vezes até terminar e ir pro proximo passo do laço externo.