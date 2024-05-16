/* 
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * 11)
}

const M = Array(6).fill(0)

for (const linha in M) {
  M[linha] = Array(6).fill(0)
}

const A = numeroAleatorio()

const V = []

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    M[i][j] = numeroAleatorio()
    V.push(M[i][j] * A)
  }
}

console.table(M)

console.log(`Fator de multiplicação: ${A}`)

console.log('Produtos:')
console.log(V)
