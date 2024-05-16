/* 
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/

var prompt = require('prompt-sync')()

const numeros = []
const numerosPares = []
const posicoesPares = []

console.log('O número digitado será automaticamente convertido para tipo inteiro!')
for (let i = 0; i < 10; i++) {
  const numero = parseInt(prompt('Digite um número: '))
  if (isNaN(numero)) {
    console.log('Valor inválido.')
    console.log('------------------')
  } else {
    numeros.push(numero)
    console.log('Número adicionado!')
    console.log('------------------')
  }
}

for (index in numeros) {
  if (numeros[index] % 2 == 0) {
    numerosPares.push(numeros[index])
    posicoesPares.push(index)
  }
}

if (numerosPares.length == 0) {
  console.log('Não há números pares.')
} else {
  console.log(`Números pares: ${numerosPares.join(', ')} | Posições: ${posicoesPares.join(', ')}`)
}