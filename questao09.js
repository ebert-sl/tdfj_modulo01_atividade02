/* 
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

var prompt = require('prompt-sync')()

let somaSalariosHomens = 0
let somaSalariosMulheres = 0
let opcao = 0

do {
  const salario = parseFloat(prompt('Digite o valor do salário do funcionário: '))
  const sexo = prompt('Qual o sexo do funcionário (Masculino ou Feminino)? ').toLowerCase()

  if (isNaN(salario)) {
    console.log('Valor do salário inválido.')
  } else if (salario <= 0) {
    console.log('Não insira valores nulos ou negativos.')
  } else {
    if (sexo == 'masculino') {
    somaSalariosHomens += salario
    console.log('Salário adicionado!')
    } else if (sexo == 'feminino') {
      somaSalariosMulheres += salario
      console.log('Salário adicionado!')
    } else {
      console.log('Sexo inválido.')
    }
  }

  opcao = prompt('Digite qualquer número para continuar ou 0/Enter para encerrar o programa: ')
  console.log('----------------------------------------------------------------------------')
} while (opcao != 0)

console.log(`Soma do salário dos homens: R$ ${somaSalariosHomens.toFixed(2)}`)
console.log(`Soma do salário das mulheres: R$ ${somaSalariosMulheres.toFixed(2)}`)