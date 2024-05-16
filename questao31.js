/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * 5)
}

const V = Array(30).fill(0)

for (const linha in V) {
  V[linha] = Array(30).fill(0)
}

const X = Array(30).fill(0)

for (const linha in X) {
  X[linha] = Array(30).fill(0)
}

const A = numeroAleatorio()

let counter = 0;

for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 30; j++) {
    V[i][j] = numeroAleatorio()
    if (V[i][j] == A) {
      counter++
    } else {
      X[i][j] = V[i][j]
    }
  }
}

console.log('Matriz V:')
console.log(V)
console.log(`Quantos valores são iguais a ${A}: ${counter}`)
console.log('Matriz X:')
console.log(X)
