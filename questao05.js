/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

var prompt = require('prompt-sync')()

const jogada1 = prompt('Jogador 1 - Pedra, Papel ou Tesoura? ').toLowerCase()
const jogada2 = prompt('Jogador 2 - Pedra, Papel ou Tesoura? ').toLowerCase()

if (jogada1 == jogada2) {
  console.log('Empate!')
} else if ((jogada1 == 'pedra' && jogada2 == 'tesoura') ||
          (jogada1 == 'papel' && jogada2 == 'pedra') ||
          (jogada1 == 'tesoura' && jogada2 == 'papel')) {
  console.log('Jogador 1 venceu!')
} else if ((jogada2 == 'pedra' && jogada1 == 'tesoura') ||
          (jogada2 == 'papel' && jogada1 == 'pedra') ||
          (jogada2 == 'tesoura' && jogada1 == 'papel')) {
  console.log('Jogador 2 venceu!')
} else {
  console.log('Valor(es) inválido(s)!')
}