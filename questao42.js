/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

const objeto = {
  numero: 1,
  string: 'string',
  array: [],
  array1: [],
  array2: []
}

console.log('Objeto original:', objeto)

const objetoNovo = {}

for (propriedade in objeto) {
  if (Array.isArray(objeto[propriedade])) {
    objetoNovo[propriedade] = objeto[propriedade]
  }
}

console.log('Objeto filtrado:', objetoNovo)