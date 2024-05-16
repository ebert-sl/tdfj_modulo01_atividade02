/* 
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * 6)
}

const matriz = Array(3).fill(0)

for (const linha in matriz) {
  matriz[linha] = Array(3).fill(0)
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = numeroAleatorio()
  }
}

console.table(matriz)

const diagonalPrincipal = []

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i == j) {
      diagonalPrincipal.push(matriz[i][j])
    }
  }
}

const diagonalSecundaria = []

let j = 2
for (let i = 0; i < 3; i++) {
  diagonalSecundaria.push(matriz[i][j])
  j--
}

const somaDiagonalSecundaria = diagonalSecundaria.reduce((total, soma) => total + soma)
const mediaDiagonalSecundaria = somaDiagonalSecundaria / diagonalSecundaria.length

const multiplicacaoDiagonalPrincipal = diagonalPrincipal.map((valor) => (valor * mediaDiagonalSecundaria).toFixed(2))

console.log(multiplicacaoDiagonalPrincipal)