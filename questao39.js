/*
39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. 
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * (11 - (-10)) + (-10))
}

const A = []

for (i = 0; i < 100; i++) {
  A.push(numeroAleatorio())
}

console.log(`\nVetor original: ${A.join(', ')}\n`)

const B = A.filter((numero) => numero > 0)

console.log(`Vetor filtrado: ${B.join(', ')}\n`)
