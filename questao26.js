/* 
26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * 11)
}

const A = Array(3).fill(0)

for (const linha in A) {
  A[linha] = Array(5).fill(0)
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    A[i][j] = numeroAleatorio()
  }
}

const B = Array(5).fill(0)

for (const linha in B) {
  B[linha] = Array(3).fill(0)
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    B[i][j] = numeroAleatorio()
  }
}

const produtos = []

for (let i = 0; i < 3; i++) {
  for (let x = 0; x < 3; x++) {
    let produto = 0
    for (let j = 0; j < 5; j++) {
      produto += A[i][j] * B[j][x]
    }
    produtos.push(produto)
  }
}

const matrizProduto = Array(3).fill(0)

for (const linha in matrizProduto) {
  matrizProduto[linha] = Array(3).fill(0)
}

let x = 0

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matrizProduto[i][j] = produtos[x]
    x++
  }
}

console.log('Matriz A')
console.table(A)
console.log('Matriz B')
console.table(B)
console.log('Matriz Produto')
console.table(matrizProduto)