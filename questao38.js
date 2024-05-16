/*
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

var prompt = require('prompt-sync')()

const vetor = []

for (let i = 0; i < 6; i++) { 
  const numero = parseFloat(prompt('Digite um número: '))
  if (isNaN(numero)) {
    console.log('Número inválido.')
    console.log('------------------')
    i--
  } else {
    vetor.push(numero)
    console.log('Número adicionado.')
    console.log('------------------')
  }
}

console.log(`
Digite a opção desejada:
1 - Soma dos elementos
2 - Produto dos elementos
3 - Média dos elementos
4 - Ordene os elementos em ordem crescente
5 - Mostre o vetor.
`)

const opcao = parseInt(prompt())

switch (opcao) {
  case 1:
    const somaVetor = vetor.reduce((total, soma) => total + soma)
    console.log(`Soma dos elementos: ${somaVetor}`)
    break
  case 2:
    const produtoVetor = vetor.reduce((total, mult) => total * mult)
    console.log(`Produto dos elementos: ${produtoVetor}`)
    break
  case 3:
    const mediaVetor = vetor.reduce((total, soma) => total + soma) / vetor.length
    console.log(`Média dos elementos: ${mediaVetor}`)
    break
  case 4:
    const vetorOrdenado = vetor.sort((a, b) => a - b)
    console.log(`Vetor ordenado: ${vetorOrdenado.join(', ')}`)
    break
  case 5:
    console.log(`Vetor: ${vetor.join(', ')}`)
    break
  default:
    console.log('Valor inválido.')
}