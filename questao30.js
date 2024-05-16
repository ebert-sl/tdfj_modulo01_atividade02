/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * 5)
}

const M = Array(5).fill(0)

for (const linha in M) {
  M[linha] = Array(5).fill(0)
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    M[i][j] = numeroAleatorio()
  }
}

console.table(M)

const SL = []
const SC = []

for (let i = 0; i < 5; i++) {
  let soma = 0;
  for (let j = 0; j < 5; j++) {
    soma += M[i][j]
  }
  SL.push(soma)
}

for (let j = 0; j < 5; j++) {
  let soma = 0;
  for (let i = 0; i < 5; i++) {
    soma += M[i][j]
  }
  SC.push(soma)
}

console.log(`Soma das linhas: ${SL}`)
console.log(`Soma das colunas: ${SC}`)