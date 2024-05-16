/* 
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

var prompt = require('prompt-sync')()
const horarios = []

function checkNaN(array) {
  for (let i = 0; i < array.length; i++) {
    const numero = array[i]
    if (isNaN(numero)) {
      return -1
    }
  }
}

for (let i = 0; i < 5; i++) {
  const horario = prompt(`Digite o horário (formato: HH.MM.SS): `)
  const horarioSeparado = horario.split('.')
  const horarioTipoInteiro = horarioSeparado.map((tempo) => parseInt(tempo))
  if (horarioTipoInteiro.length != 3) {
    console.log('Horário digitado incorretamente.')
    console.log('--------------------------------')
  } else if (checkNaN(horarioTipoInteiro) == -1) { 
    console.log('Horário digitado incorretamente.')
    console.log('--------------------------------')
  } else {
    if (horarioTipoInteiro[0] < 0 || horarioTipoInteiro[0] >= 24) {
      console.log('Horas incorretas.')
      console.log('--------------------------------')
    } else if (horarioTipoInteiro[1] < 0 || horarioTipoInteiro[1] >= 60) {
      console.log('Minutos incorretos')
      console.log('--------------------------------')
    } else if (horarioTipoInteiro[2] < 0 || horarioTipoInteiro[2] >= 60) {
      console.log('Segundos incorretos.')
      console.log('--------------------------------')
    } else {
      if ((horarioTipoInteiro[0] >= 1 && horarioTipoInteiro[0] < 10)) {
        horarioTipoInteiro[0] = '0' + horarioTipoInteiro[0].toString()
      } 
      if ((horarioTipoInteiro[1] >= 1 && horarioTipoInteiro[1] < 10)) {
        horarioTipoInteiro[1] = '0' + horarioTipoInteiro[1].toString()
      } 
      if ((horarioTipoInteiro[2] >= 1 && horarioTipoInteiro[2] < 10)) {
        horarioTipoInteiro[2] = '0' + horarioTipoInteiro[2].toString()
      }
      const horarioCorrigido = horarioTipoInteiro.join('.')
      horarios.push(horarioCorrigido)
      console.log('Horário adicionado!')
      console.log('--------------------------------')
    }
  }
}

console.log(`Horários: ${horarios.join(' | ')}`)