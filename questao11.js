/* 
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/

var prompt = require('prompt-sync')()

const primeiroTermo = parseFloat(prompt('Digite o primeiro termo da PA: '))
const razaoPA = parseFloat(prompt('Digite a razão da PA: '))
const PA = [primeiroTermo]

if (isNaN(primeiroTermo) || isNaN(razaoPA)) {
  console.log('Só é permitido inserir valores númericos.')
} else {
  for (let i = 0; i < 9; i++) {
    PA.push(PA[i] + razaoPA)
  }

  const somaPA = PA.reduce((total, valor) => total + valor)

  console.log(`Os 10 primeiros termos da PA são: ${PA.join(', ')} `)
  console.log(`Soma dos elementos: ${somaPA}`)
}
