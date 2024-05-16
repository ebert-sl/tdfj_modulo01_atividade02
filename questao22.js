/* 
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a média do 
número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.
*/

var prompt = require('prompt-sync')()

const salarios = []
const numerosFilhos = []
let opcao = -1

while (opcao != 0) {
  const salario = parseFloat(prompt('Digite o salário do habitante: '))
  const numeroFilhos = parseInt(prompt('Digite o número de filhos: '))

  if (isNaN(salario) || salario < 0) {
    console.log('Salário inválido.')
  } else if (isNaN(numeroFilhos) || numeroFilhos < 0 || numeroFilhos == '') {
    console.log('Número de filhos inválido.')
  } else {
    salarios.push(salario)
    numerosFilhos.push(numeroFilhos)
    console.log('Habitante adicionado!')
  }
  opcao = prompt('Digite qualquer número para continuar ou 0/Enter para encerrar o programa: ')
  console.log('----------------------------------------------------------------------------')
}

const somaSalarios = salarios.reduce((total, soma) => total + soma)
const mediaSalarios = somaSalarios / salarios.length

const somaFilhos = numerosFilhos.reduce((total, soma) => total + soma)
const mediaFilhos = somaFilhos / numerosFilhos.length

const salariosOrdenados = salarios.sort((a, b) => b - a)
const maiorSalario = salariosOrdenados[0]

const salariosAte350 = salarios.filter((salario) => salario <= 350)
const porcentagemSalariosAte350 = (100 * salariosAte350.length) / salarios.length

console.log(`Média de salários: R$ ${mediaSalarios.toFixed(2)}`)
console.log(`Média de filhos: ${mediaFilhos.toFixed(2)}`)
console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`)
console.log(`Porcentagem de salários até R$ 350: ${porcentagemSalariosAte350.toFixed(2)}%`)