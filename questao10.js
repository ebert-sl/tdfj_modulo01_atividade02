/* 
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/

var prompt = require('prompt-sync')()

const valores = []
let opcao = 0

do {
  const valor = parseFloat(prompt('Digite um valor numérico: '))

  if (isNaN(valor)) {
    console.log('Valor inválido!')
  } else {
    valores.push(valor)
    console.log('Valor adicionado!')
  }
 
  opcao = prompt('Digite qualquer número para continuar ou 0/Enter para encerrar o programa: ')
  console.log('----------------------------------------------------------------------------')
} while (opcao != 0)

if (valores.length == 0) {
  console.log('Array vazio!')
} else {
  const somaValores = valores.reduce((total, soma) => total + soma)
  const arrayOrdenado = valores.sort((a, b) => (a - b))
  const menorValor = arrayOrdenado[0]
  const mediaValores = somaValores / valores.length
  const valoresPares = valores.filter((valor) => valor % 2 == 0)

  console.log(`Soma dos valores: ${somaValores}`)
  console.log(`Menor valor: ${menorValor}`)
  console.log(`Média dos valores: ${mediaValores}`)
  console.log(`Quantidade de valores pares: ${valoresPares.length} ${valoresPares.length > 0 ? '-> [' + valoresPares.join(', ') + ']' : ''}`)
}
