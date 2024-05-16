/* 
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

var prompt = require('prompt-sync')()

const funcionarios = []
let counter = 0
let opcao = -1

while(opcao != 0 && counter < 80) {
  const matricula = Math.floor(Math.random() * (10000 - 1000) + 1000)
  const nome = prompt('Digite o nome do funcionário: ')
  const salarioBruto = parseFloat(prompt('Digite o salário do funcionário: '))
  if (isNaN(salarioBruto)) {
    console.log('Salário inválido.')
  } else {
    const deducaoINSS = salarioBruto * 0.12
    const salarioLiquido = salarioBruto - deducaoINSS
    funcionarios.push([matricula, nome, salarioBruto, deducaoINSS, salarioLiquido])
    console.log('Funcionário adicionado!')
  }
  opcao = prompt('Digite qualquer número para continuar ou 0/Enter para encerrar o programa: ')
  console.log('----------------------------------------------------------------------------')
  counter++;
}

for (let funcionario of funcionarios) {
  console.log(`Matrícula: ${funcionario[0]}`)
  console.log(`Nome: ${funcionario[1]}`)
  console.log(`Salário bruto: R$ ${funcionario[2]}`)
  console.log(`Dedução INSS: R$ ${funcionario[3]}`)
  console.log(`Salário líquido: R$ ${funcionario[4]}`)
  console.log(`----------------------------------`)
}