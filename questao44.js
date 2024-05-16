/* 
44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

const objeto = {
  numero: 1,
  string: 'string',
  string2: 'string',
  array: [],
  array1: [],
  array2: [],
  string3: 'string',
}

function contarStrings(objeto) {
  let contador = 0
  for (chave in objeto) {
    if (typeof(objeto[chave]) == 'string') {
      contador++
    }
  }
  return contador + ' string(s)'
}

console.log(contarStrings(objeto))