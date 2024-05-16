/* 
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

var prompt = require('prompt-sync')()

const nome = prompt('Qual o nome do funcionário? ')
const cargo = prompt('Qual o cargo do funcionário? ')
const salario = parseFloat(prompt('Qual o salário do funcionário? '))

if (isNaN(salario) || salario < 0) {
  console.log('O salário está inválido')
} else {
  const funcionario = {
    nome: nome,
    cargo: cargo,
    salario: salario
  }
  console.log(funcionario)
}
