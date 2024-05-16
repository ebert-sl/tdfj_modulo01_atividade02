/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/

function numeroAleatorio() {
  return Math.floor(Math.random() * (5 - (-5) + 1) + (-5))
}

const M = Array(12).fill(0)

for (const linha in M) {
  M[linha] = Array(13).fill(0)
}

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 13; j++) {
    M[i][j] = numeroAleatorio()
  }
}

console.log('Matriz original:')
console.table(M)

const maioresNumeros = []

for (let i = 0; i < 12; i++) {
  let maiorNumero = null
  for (let j = 0; j < 13; j++) {
    if (maiorNumero == null) {
      maiorNumero = Math.abs(M[i][j])
      continue
    }
    if (maiorNumero < Math.abs(M[i][j])) {
      maiorNumero = Math.abs(M[i][j])
    }
  }
  maioresNumeros.push(maiorNumero)
}

const MModificada = Array(12).fill(0)

for (const linha in MModificada) {
  MModificada[linha] = Array(13).fill(0)
}

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 13; j++) {
    MModificada[i][j] = (M[i][j] / maioresNumeros[i]).toFixed(2)
  }
}

console.log('Matriz modificada: ')
console.table(MModificada)