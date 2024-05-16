/* 
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

var prompt = require('prompt-sync')()

const nomes = []
const idades = []
const menoresIdade = []

console.log('A idade será automaticamente convertida para tipo inteiro!')

for (let i = 0; i < 9; i++) {
  const nome = prompt('Digite o nome da pessoa: ')
  const idade = parseInt(prompt('Digite a idade da pessoa: '))

  if(isNaN(idade)) {
    console.log('Idade inválida!')
    console.log('---------------')
  } else {
    nomes.push(nome)
    idades.push(idade)
    console.log('Dados adicionados!')
    if (idade < 18) {
      menoresIdade.push(nome)
      console.log('---------------')
    }
  }
}

console.log(`Menores de idade: ${menoresIdade.join(', ')}`)