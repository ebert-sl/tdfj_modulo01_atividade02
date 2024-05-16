/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * (10 - (-10) + 1) + (-10))
}

const M = Array(6).fill(0)

for (const linha in M) {
  M[linha] = Array(8).fill(0)
}

const C = []

for (let i = 0; i < 6; i++) {
  let contadorNumerosNegativos = 0
  for (let j = 0; j < 8; j++) {
    M[i][j] = numeroAleatorio()
    if (M[i][j] < 0) {
      contadorNumerosNegativos++
    }
  }
  C.push(contadorNumerosNegativos)
}

console.table(M)

for (index in C) {
  console.log(`Na linha ${index} tem ${C[index]} números negativos.`)
}