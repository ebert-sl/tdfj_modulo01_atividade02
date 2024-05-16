/* 
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * 101)
}

const gabarito = []

for (let i = 0; i < 13; i++) {
  const numero = numeroAleatorio()
  if (gabarito.indexOf(numero) == -1) {
    gabarito.push(numero)
  } else {
    i = i - 1
  }
}

console.log(`Gabarito: ${gabarito.join(', ')}`)

for (i = 0; i < 10; i++) {
  const numerosJogador = []
  let contadorAcerto = 0
  for (let i = 0; i < 13; i++) {
    const numero = numeroAleatorio()
    if (numerosJogador.indexOf(numero) == -1) {
      numerosJogador.push(numero)
      if (gabarito.indexOf(numero) != -1) {
        contadorAcerto++
      }
    } else {
      i = i - 1
    }
  }
  if (contadorAcerto == 13) {
    console.log(`Jogador #${i+1} - ${numerosJogador.join(', ')} - Acertos: ${contadorAcerto} - Parabéns, tu foi o GANHADOR`)
  } else {
    console.log(`Jogador #${i+1} - ${numerosJogador.join(', ')} - Acertos: ${contadorAcerto}`)
  }
}