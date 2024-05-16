/* 
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

const MI = Array(7).fill(0)

for (const linha in MI) {
  MI[linha] = Array(7).fill(0)
}

for (let i = 0; i < 7; i++) {
  MI[i][i] = 1
}

console.table(MI)
