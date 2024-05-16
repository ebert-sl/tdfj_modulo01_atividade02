/* 
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

function numeroAleatorio() {
  return (Math.random() * (10 - (-10) + 1) + (-10)).toFixed(2)
}

const matriz = Array(15).fill(0)

for (linha in matriz) {
  matriz[linha] = Array(20).fill(0)
}

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 20; j++) {
    matriz[i][j] = parseFloat(numeroAleatorio())
  }
}

const somaPorColuna = []

for (let j = 0; j < 20; j++) {
  let soma = 0
  for (let i = 0; i < 15; i++) {
    soma = soma + matriz[i][j]
  }
  const somaCorrigida = soma.toFixed(2)
  somaPorColuna.push(somaCorrigida)
}

console.log(matriz)

for (index in somaPorColuna) {
  console.log(`A soma dos números na coluna ${index} resulta em ${somaPorColuna[index]}`)
}
