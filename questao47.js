/*
47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

function transformarObjeto(objeto, funcao) {
  const objetoNovo = {}
  for (chave in objeto) {
    objetoNovo[chave] = funcao(objeto[chave])
  }
  return objetoNovo
}

const objeto = {
  nome: 'Ébert',
  idade: '21',
  email: 'xxxxxxx@gmail.com'
}

function transformarChave(chave) {
  return chave.toUpperCase()
}

console.log(transformarObjeto(objeto, transformarChave))
