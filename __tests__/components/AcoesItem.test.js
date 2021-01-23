import 'react-native'
import React from 'react'
import AcoesItem from '../../src/components/AcoesItem'
import { percentualToValor } from '../../src/util/functions'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
jest.useFakeTimers()

jest.mock('react-currency-input', () => props => <input type="text" {...{ ...props }} />)

const mockAcoes = {
  nome: 'INVESTIMENTO I',
  objetivo: 'Minha aposentadoria',
  saldoTotalDisponivel: 39321.29,
  indicadorCarencia: 'N',
  acoes: [
    {
      id: '1',
      nome: 'BBAS3',
      percentual: 28.1,
    },
    {
      id: '2',
      nome: 'VALE3',
      percentual: 20.71,
    },
    {
      id: '3',
      nome: 'PETR4',
      percentual: 21.63,
    },
    {
      id: '4',
      nome: 'CMIG3',
      percentual: 12.41,
    },
    {
      id: '5',
      nome: 'OIBR3',
      percentual: 17.15,
    },
  ],
};

it('renders correctly AcoesItem', () => {
  const tree = renderer.create(
    <AcoesItem
      acao={mockAcoes.acoes[0]}
      limit={percentualToValor(mockAcoes.saldoTotalDisponivel, mockAcoes.acoes[1].percentual)}
      changeHandler={jest.fn()}
      inputValue={jest.fn()}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
