/*
49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

const pagamentos = [
  {
    id: 1,
    valor: 1000,
    data: '15/05/2024',
    categoria: 'informática'
  },
  {
    id: 2,
    valor: 5000,
    data: '15/05/2024',
    categoria: 'informática'
  },
  {
    id: 3,
    valor: 3000,
    data: '15/05/2024',
    categoria: 'cama, mesa e banho'
  }
]

function pagamentosUnificados(pagamentos) {
  const objetoNovo = {}
  for (const pagamento of pagamentos) {
    objetoNovo[pagamento.categoria] = []
  }
  for (const pagamento of pagamentos) {
    objetoNovo[pagamento.categoria].push([pagamento.id, pagamento.valor, pagamento.data])
  }
  for (categoria in objetoNovo) {
    let subTotal = 0
    for (const array of objetoNovo[categoria]) {
      subTotal += array[1]
    }
    objetoNovo[categoria].push(subTotal)
  }
  return objetoNovo
}

console.log(pagamentosUnificados(pagamentos))
