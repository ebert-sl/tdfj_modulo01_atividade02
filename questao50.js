/*
50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.

2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.

3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.
*/

var prompt = require('prompt-sync')()

const hoteis = []
const reservas = []

function adicionarHotel() {
  const nome = prompt('Qual o nome do hotel? ').toLowerCase()
  const cidade = prompt('Em qual cidade o hotel está? ').toLowerCase()
  const quartosTotais = parseInt(prompt('Quantos quartos tem o hotel? '))
  if (isNaN(quartosTotais)) {
    console.log('Número de quartos inválido!')
  } else if (!nome.trim() || !cidade.trim()) {
    console.log ('Nome do hotel ou da cidade inválido.')
  } else {
    const hotel = {
      id: hoteis.length + 1,
      nome: nome,
      cidade: cidade,
      quartosTotais: quartosTotais,
      quartosDisponiveis: quartosTotais
    }
    hoteis.push(hotel)
    const nomeCorrigido = hotel.nome[0].toUpperCase() + hotel.nome.substring(1)
    console.log(`Hotel ${nomeCorrigido} adicionado!`)
  }
}

function buscarHotelPorCidade() {
  const cidade = prompt('Qual cidade deseja buscar por hotel? ').toLowerCase()
  const hoteisEncontrados = []
  for (const hotel of hoteis) {
    if (hotel.cidade == cidade) {
      hoteisEncontrados.push(hotel.nome[0].toUpperCase() + hotel.nome.substring(1))
    }
  }
  if (hoteisEncontrados.length == 0) {
    console.log('Não foram encontrados hóteis nesta cidade.')
  } else {
    console.log('Hotéis encontrados:')
    for (const hotel of hoteisEncontrados) {
      console.log(hotel)
    }
  }
}

function validarData(valor) {
  if (typeof valor != 'string') {
    return false
  }

  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(valor)) {
    return false
  }

  const partesData = valor.split('/')
  const data = {
    dia: partesData[0],
    mes: partesData[1],
    ano: partesData[2]
  }

  const dia = parseInt(data.dia)
  const mes = parseInt(data.mes)
  const ano = parseInt(data.ano)

  const diasNoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0) {
    diasNoMes[2] = 29
  }

  if (mes < 1 || mes > 12 || dia < 1) {
    return false
  }

  else if (dia > diasNoMes[mes]) {
    return false
  }

  return true
}

function fazerReserva() {
  const hoteisDisponiveis = []
  for (const hotel of hoteis) {
    if (hotel.quartosDisponiveis > 0) {
      hoteisDisponiveis.push(hotel)
    }
  }
  if (hoteisDisponiveis.length == 0) {
    console.log('No momento não há hotéis disponíveis para reserva.')
  } else {
    console.log('Hotéis disponíveis:')
    for (const hotel of hoteisDisponiveis) {
      const nomeCorrigido = hotel.nome[0].toUpperCase() + hotel.nome.substring(1)
      const cidadeCorrigida = hotel.cidade[0].toUpperCase() + hotel.cidade.substring(1)
      console.log(`${nomeCorrigido} - ${cidadeCorrigida} - Quartos disponíveis: ${hotel.quartosDisponiveis}`)
    }
    const hotelEscolhido = prompt('Qual hotel quer reservar? ').toLowerCase()
    let hotelAchado = false
    for (const hotel of hoteisDisponiveis) {
      if (hotelEscolhido == hotel.nome) {
        hotelAchado = true
      }
    }
    if (hotelAchado) {
      const nome = prompt('Qual seu nome? ')
      const data = prompt('Para qual data deseja reservar seu quarto (DD/MM/AAAA)? ')
      const dataCorreta = validarData(data)
      if (nome.trim() && dataCorreta) {
        for (const hotel of hoteisDisponiveis) {
          if (hotelEscolhido == hotel.nome) {
            hotel.quartosDisponiveis--
            const reserva = {
              id: Math.floor(Math.random() * 10000001),
              nome: nome, 
              data: data, 
              nomeHotel: hotel.nome, 
              nomeCidade: hotel.cidade
            }
            reservas.push(reserva)
            console.log('Reserva feita com sucesso!')
          } 
        }
      } else {
        console.log('Nome ou data inválida.')
      }
    } else {
      console.log('Nome do hotel inválido.')
    }
  }
}

function cancelarReserva() {
  if (reservas.length == 0) {
    console.log('Não há reservas para cancelar.')
  } else {
    const nome = prompt('Qual seu nome? ')
    const reservasEncontradas = []
    for (const reserva of reservas) {
      if (reserva.nome == nome) {
        reservasEncontradas.push(reserva)
      }
    }
    if (reservasEncontradas.length == 0) {
      console.log('Não foram achadas reservas no seu nome.')
    } else {
      console.log('Reservas encontradas:')
      for (const reserva of reservasEncontradas) {
        const nomeCorrigido = reserva.nomeHotel[0].toUpperCase() + reserva.nomeHotel.substring(1)
        const cidadeCorrigida = reserva.nomeCidade[0].toUpperCase() + reserva.nomeCidade.substring(1)
        console.log(`${reserva.id} - ${reserva.data} - ${nomeCorrigido} - ${cidadeCorrigida}`)
      }
      const idReserva = parseInt(prompt('Qual reserva deseja cancelar (digite o ID)? '))
      if (isNaN(idReserva)) {
        console.log('ID de Reserva inválido.')
      } else {
        let reservaSelecionada = 0
        for (const reserva of reservasEncontradas) {
          if (reserva.id == idReserva) {
            reservaSelecionada = reserva
          }
        }
        if (reservaSelecionada == 0) {
          console.log('ID de Reserva não existente na lista.')
        } else {
          for (const reserva of reservas) {
            if (reserva == reservaSelecionada) {
              for (const hotel of hoteis) {
                if (reserva.nomeHotel == hotel.nome) {
                  hotel.quartosDisponiveis++
                }
              }
              const index = reservas.indexOf(reserva)
              reservas.splice(index, 1)
              console.log('Reserva cancelada!')
            }
          }
        }
      }
    }
  }
}

function listarReservas() {
  if (reservas.length == 0) {
    console.log('Não há reservas para listar.')
  } else {
    for (const reserva of reservas) {
      for (const hotel of hoteis) {
        if (reserva.nomeHotel == hotel.nome) {
          const nomeReservaCorrigido = reserva.nomeHotel[0].toUpperCase() + reserva.nomeHotel.substring(1)
          const cidadeReservaCorrigida = reserva.nomeCidade[0].toUpperCase() + reserva.nomeCidade.substring(1)
          console.log(`\nReserva: ${reserva.id} - ${reserva.nome} - ${reserva.data} - Hotel ${nomeReservaCorrigido} - ${cidadeReservaCorrigida}`)
          console.log(`Detalhes do hotel: ${nomeReservaCorrigido} - ${cidadeReservaCorrigida} - Quartos totais: ${hotel.quartosTotais} - Quartos disponíveis: ${hotel.quartosDisponiveis}`)
        }
      }
    }
  }
}

console.log(`Seja bem-vindo!`)

while (true) {
  console.log(`
1 - Adicionar hotel
2 - Buscar hotel por cidade
3 - Fazer reserva
4 - Cancelar reserva
5 - Listar reservas
0 - Encerrar programa
`)

  const opcao = parseInt(prompt('Digite a opção desejada: '))
  switch (opcao) {
    case 1:
      adicionarHotel()
      break
    case 2:
      buscarHotelPorCidade()
      break
    case 3:
      fazerReserva()
      break
    case 4:
      cancelarReserva()
      break
    case 5:
      listarReservas()
      break
    case 0:
      break
    default:
      console.log('Opção inválida!')
  }
  if (opcao == 0) {
    console.log('Encerrando programa...')
    break
  }
}
