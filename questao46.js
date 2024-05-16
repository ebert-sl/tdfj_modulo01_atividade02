/*
46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

const arrayObjetos = [
  {
    vendedor: 'Ébert',
    valor: 1000
  },
  {
    vendedor: 'Ébert',
    valor: 1000
  },
  {
    vendedor: 'Ian',
    valor: 3000
  },
  {
    vendedor: 'Ian',
    valor: 5000
  }
]

function somarVendas(objeto) {
  let soma = 0
  for (const obj of arrayObjetos) {
    if (obj.vendedor == objeto.vendedor) {
      soma += obj.valor
    }
  }
  return soma
}

const objeto = {}

for (const obj of arrayObjetos) {
  objeto[obj.vendedor] = somarVendas(obj)
}

console.log(objeto)