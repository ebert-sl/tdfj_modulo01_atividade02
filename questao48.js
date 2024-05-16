/*
48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

const inventarioLojaA = {
  bateria: 1,
  mochila: 2,
  notebook: 3
}

const inventarioLojaB = {
  bateria: 2,
  smartphone: 3,
  mouse: 4
}

const inventarioAChaves = Object.keys(inventarioLojaA)
const inventarioBChaves = Object.keys(inventarioLojaB)

const inventarioMesclado = {}

for (const chave of inventarioAChaves) {
  inventarioMesclado[chave] = inventarioLojaA[chave]
}

for (const chave of inventarioBChaves) {
  if (inventarioAChaves.indexOf(chave) != -1) {
    inventarioMesclado[chave] += inventarioLojaB[chave] 
  } else {
    inventarioMesclado[chave] = inventarioLojaB[chave]
  }
}

console.log(inventarioMesclado)