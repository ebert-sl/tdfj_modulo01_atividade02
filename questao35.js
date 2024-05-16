/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * 11)
}

let pares = []
let impares = []

for (let i = 0; i < 30; i++) {
  const numero = numeroAleatorio()
  if (pares.length == 5) {
    console.log(`Array de pares encheu! Valores: ${pares.join(', ')}`)
    pares = []
  }
  if (impares.length == 5) {
    console.log(`Array de ímpares encheu! Valores: ${impares.join(', ')}`)
    impares = []
  } 
  if (numero % 2 == 0) {
    pares.push(numero)
  } else {
    impares.push(numero)
  }
}

console.log(`Array de números pares final: ${pares.join(', ')}`)
console.log(`Array de números ímpares final: ${impares.join(', ')}`)