/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * 11)
}

const matriz = Array(50).fill(0)

for (const linha in matriz) {
  matriz[linha] = Array(50).fill(0)
}

const diagonalPrincipal = []

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
    matriz[i][j] = numeroAleatorio()
    if (i == j) {
      diagonalPrincipal.push(matriz[i][j])
    }
  }
}

console.log('Matriz original:')
console.log(matriz)

const matrizModificada = Array(50).fill(0)

for (const linha in matrizModificada) {
  matrizModificada[linha] = Array(50).fill(0)
}

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
    matrizModificada[i][j] = matriz[i][j] * diagonalPrincipal[i]
  }
}

console.log('Matriz modificada:')
console.log(matrizModificada)