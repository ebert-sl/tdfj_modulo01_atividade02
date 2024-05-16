/* 
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
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

let somaLinha4 = 0

for (let j = 0; j < 5; j++) {
  somaLinha4 += M[4][j]
}

let somaColuna2 = 0

for (let i = 0; i < 5; i++) {
  somaColuna2 += M[i][2]
}

let somaDiagonalPrincipal = 0

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i == j) {
      somaDiagonalPrincipal += M[i][j]
    }
  }
}

let somaTotal = 0

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    somaTotal += M[i][j]
  }
}

console.log(`Soma da Linha 4: ${somaLinha4}`)
console.log(`Soma da Coluna 2: ${somaColuna2}`)
console.log(`Soma da Diagonal Principal: ${somaDiagonalPrincipal}`)
console.log(`Soma de todos os elementos: ${somaTotal}`)