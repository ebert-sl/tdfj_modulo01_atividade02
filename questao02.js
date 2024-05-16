/* 
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h elevado a -1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

var prompt = require('prompt-sync')()

const velocidade = prompt('Digite sua velocidade em km/h: ')

if (velocidade > 80) {
  const velocidadeUltrapassada = velocidade - 80
  const multa = velocidadeUltrapassada * 5
  console.log(`Você ultrapassou a velocidade máxima em ${velocidadeUltrapassada}! Multa: R$ ${multa}`)
} else if (velocidade > 0 && velocidade <= 80) {
  console.log('Você está dentro da velocidade permitida.')
} else {
  console.log('Valor inválido.')
}