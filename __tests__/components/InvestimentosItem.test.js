import 'react-native'
import React from 'react'
import InvestimentosItem from '../../src/components/InvestimentosItem'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
jest.useFakeTimers()

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

it('renders correctly InvestimentosItem', () => {
  const tree = renderer.create(
    <InvestimentosItem
      navigation={jest.fn()}
      investimento={mockAcoes}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
