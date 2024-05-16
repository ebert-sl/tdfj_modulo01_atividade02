/* 
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

var prompt = require('prompt-sync')()
const pessoas = []

do {
  const pessoa = prompt('Digite o nome da pessoa: ')
  pessoas.push(pessoa)
  console.log('Nome adicionado!')
  console.log('--------------------------')
} while (pessoas.length < 7)

const pessoasInvertidas = pessoas.reverse()
console.log(pessoasInvertidas.join(', '))