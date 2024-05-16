/* 
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

const vetor = []

for (let i = -1; i < 14; i++) {
  if (vetor.length == 0 || vetor.length == 1) {
    vetor.push(1)
  } else {
    vetor.push(vetor[i] + vetor[i-1])
  }
}

console.log(vetor.join(', '))