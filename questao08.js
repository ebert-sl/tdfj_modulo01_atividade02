/* 
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

var prompt = require('prompt-sync')()

const horasAtividade = prompt('Quantas horas de atividade física faz por mês? ')
let pontos = 0

if (horasAtividade <= 0) {
  console.log('Não é permitido valor de horas nulo ou negativo.')
} else {
  if (horasAtividade > 0 && horasAtividade <= 10) {
    pontos = horasAtividade * 2
  } else if (horasAtividade > 10 && horasAtividade <= 20) {
    pontos = horasAtividade * 5
  } else {
    pontos = horasAtividade * 10
  }
  console.log(`Você acumulou ${pontos} pontos e ganhou R$ ${(pontos * 0.05).toFixed(2)}!`)
}
