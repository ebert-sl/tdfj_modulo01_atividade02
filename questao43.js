/* 
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

const obj1 = {
  nome: 'Carlos',
  idade: 25,
  email: 'xxxxxx@gmail.com',
  jogoFavorito: 'Persona'
}

const obj2 = {
  nome: 'Ébert',
  idade: 21,
  email: 'xxxxxx@outlook.com',
  sistemaPreferido: 'Windows'
}

console.log('Objeto 1:', obj1)
console.log('Objeto 2:', obj2)

const chavesObj1 = Object.keys(obj1)
const chavesObj2 = Object.keys(obj2)

const objetoMesclado = {}

for (const chave of chavesObj1) {
  objetoMesclado[chave] = obj1[chave]
}

for (const chave of chavesObj2) {
  objetoMesclado[chave] = obj2[chave]
}

console.log('Objeto mesclado:', objetoMesclado)