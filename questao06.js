/* 
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.
*/

var prompt = require('prompt-sync')()

const numeroAleatorio = Math.floor(Math.random() * (5 - 1 + 1) + 1)
let numeroAdivinhado = 0

console.log('O número adivinhado será automaticamente convertido para tipo inteiro!')
do {
  numeroAdivinhado = parseInt(prompt('Adivinhe o número: '))
  if (isNaN(numeroAdivinhado)) {
    console.log('Valor inválido.')
  } else if (numeroAdivinhado < 1 || numeroAdivinhado > 5) {
    console.log('Só é permitido números entre 1 e 5.')
  } else if (numeroAdivinhado == numeroAleatorio) {
    console.log('Acertou!')
  } else {
    console.log('Errou!')
    console.log('-------------------')
  }
} while (numeroAdivinhado != numeroAleatorio)