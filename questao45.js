/*
45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

const array = ['string1', 'string2', 'string3', 'string1', 'string1', 'string2']

const objeto = {}

function contarString(termo) {
  let contador = 0
  for (const string of array) {
    if (termo == string) {
      contador++
    }
  }
  return contador
}

for (const string of array) {
  objeto[string] = contarString(string)
}

console.log(objeto)
