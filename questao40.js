/* 
40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * (11 - 1) + 1)
}

const resultadoOficial = []

for (let i = 0; i < 5; i++) {
  const numero = numeroAleatorio()
  if (resultadoOficial.indexOf(numero) == -1) {
    resultadoOficial.push(numero)
  } else {
    i--
  }
}

console.log(`Resultado oficial: ${resultadoOficial.join(', ')}`)

for (i = 0; i < 50; i++) {
  const numerosJogador = []
  let contadorAcerto = 0
  for (let i = 0; i < 5; i++) {
    const numero = numeroAleatorio()
    if (numerosJogador.indexOf(numero) == -1) {
      numerosJogador.push(numero)
      if (resultadoOficial.indexOf(numero) != -1) {
        contadorAcerto++
      }
    } else {
      i--
    }
  }
  if (contadorAcerto == 5) {
    console.log(`Jogador #${i+1} - ${numerosJogador.join(', ')} - Acertos: ${contadorAcerto} - Ganhador`)
  } else {
    console.log(`Jogador #${i+1} - ${numerosJogador.join(', ')} - Acertos: ${contadorAcerto}`)
  }
}