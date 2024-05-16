/* 
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

const numeros = []

for (let i = 0; i < 20; i++) {
  const numero = Math.random() * 100
  numeros.push(numero.toFixed(2))
}

console.log(`Números gerados: ${numeros.join(', ')}`)

const numerosOrdenados = numeros.sort((a, b) => a - b)

console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`)