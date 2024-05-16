/* 
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

const vetor = [1, 1]

for (let i = 1; i < 9; i++) {
  vetor.push(vetor[i] + vetor[i-1])
}

console.log(vetor.join(', '))