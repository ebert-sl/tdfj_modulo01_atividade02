/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

var prompt = require('prompt-sync')()

const distanciaKM = prompt('Digite a distância em km a ser percorrida: ')

if (distanciaKM > 0 && distanciaKM <= 200) {
  const precoPassagem = distanciaKM * 0.50
  console.log(`O preço da passagem é R$ ${precoPassagem.toFixed(2)}.`)
} else if (distanciaKM > 200) {
  const precoPassagem = distanciaKM * 0.45
  console.log(`O preço da passagem é R$ ${precoPassagem.toFixed(2)}.`)
} else {
  console.log(`Valor inválido.`)
}