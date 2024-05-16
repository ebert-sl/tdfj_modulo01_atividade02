/* 
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

var prompt = require('prompt-sync')()

const altura = parseFloat(prompt('Digite a sua altura (em metros): '))
const sexo = prompt('Digite o seu sexo (Masculino ou Feminino): ').toLowerCase()

function verPesoIdeal(altura, sexo) {
  if (isNaN(altura)) {
    console.log('Altura inválida.')
  } else {
    if (sexo == 'masculino') {
      console.log(`Seu peso ideal deve ser: ${(72.7 * altura - 58).toFixed(2)}kg`)
    } else if (sexo == 'feminino') {
      console.log(`Seu peso ideal deve ser: ${(62.1 * altura - 44.7).toFixed(2)}kg`)
    } else {
      console.log('Sexo digitado incorretamente.')
    }
  }
}

verPesoIdeal(altura, sexo)