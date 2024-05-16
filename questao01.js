/* 
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

var prompt = require('prompt-sync')()

console.log('O número de cigarros será automaticamente convertido para tipo inteiro!')
const cigarrosPorDia = parseInt(prompt('Quantos cigarros fuma por dia? '))
const anosDeFumo = parseFloat(prompt('Por quantos anos fumou? '))

if (isNaN(cigarrosPorDia) || isNaN(anosDeFumo)) {
  console.log('Só é permitido valores numéricos.')
} else {
  const cigarrosPorAno = cigarrosPorDia * 365
  const diasDeVidaPerdidos =  (cigarrosPorAno * anosDeFumo * 10) / 1440

  console.log(`Você perdeu ${diasDeVidaPerdidos.toFixed(2)} dias de vida.`)
}
