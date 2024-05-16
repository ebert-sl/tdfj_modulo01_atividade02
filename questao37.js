/*
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

const alternativas = ['verdadeiro', 'falso']

function numeroAleatorio() {
  return Math.floor(Math.random() * 2)
}

const gabarito = []

for (let i = 0; i < 20; i++) {
  const index = numeroAleatorio()
  gabarito.push(alternativas[index])
}

console.log(`Gabarito: ${gabarito.join(', ')}`)

for (let i = 0; i < 50; i++) {
  const gabaritoAluno = []
  let contagemAcertos = 0
  for (let j = 0; j < 20; j++) {
    const index = numeroAleatorio()
    gabaritoAluno.push(alternativas[index])
    if (gabarito[j] == gabaritoAluno[j]) {
      contagemAcertos++
    }
  }
  if (contagemAcertos >= 12) {
    console.log(`Aluno ${i+1} fez ${contagemAcertos} acerto(s) e foi aprovado.`)
  } else {
    console.log(`Aluno ${i+1} fez ${contagemAcertos} acerto(s) e foi reprovado.`)
  }
}