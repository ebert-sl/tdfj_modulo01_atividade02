/* 
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * 5)
}

const matriz = Array(10).fill(0)

for (const linha in matriz) {
  matriz[linha] = Array(10).fill(0)
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    matriz[i][j] = numeroAleatorio()
  }
}

console.table(matriz)

let somaElementosAcima = 0
let somaElementosAbaixo = 0

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == j) {
      for (let x = j + 1; x < matriz.length; x++)
      somaElementosAcima += matriz[i][x]
      break
    } else {
      somaElementosAbaixo += matriz[i][j]
    }
  }
}

console.log(`Soma dos elementos acima da diagonal: ${somaElementosAcima}`)
console.log(`Soma dos elementos abaixo da diagonal: ${somaElementosAbaixo}`)