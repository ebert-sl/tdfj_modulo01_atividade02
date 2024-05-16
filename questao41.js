/* 
41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

var prompt = require('prompt-sync')()

const pessoa = {
  nome: 'Ébert',
  idade: 21
}

console.log(pessoa)

console.log(`Idade da pessoa: ${pessoa.idade}`)

pessoa.email = 'xxxxxxx@gmail.com'

console.log(pessoa)
