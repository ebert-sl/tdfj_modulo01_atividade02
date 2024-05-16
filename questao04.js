/* 
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

var prompt = require('prompt-sync')()

const lado1 = parseFloat(prompt('Digite o valor do primeiro lado: '))
const lado2 = parseFloat(prompt('Digite o valor do segundo lado: '))
const lado3 = parseFloat(prompt('Digite o valor do terceiro lado: '))

if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
  console.log('Só é permitido valores numéricos.')
} else if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  console.log('Os lados formam um triângulo.')
} else {
  console.log('Os lados não formam um triângulo.')
}