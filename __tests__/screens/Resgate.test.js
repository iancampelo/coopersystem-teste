import 'react-native'
import React from 'react'
import ResgateScreen from '../../src/screens/Resgate'
import renderer from 'react-test-renderer'

jest.useFakeTimers()
jest.mock('modal-enhanced-react-native-web', () => props => <div {...{ ...props }} />)

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

it('renders correctly ResgateScreen', () => {
  const push = jest.fn();
  const tree = renderer.create(
    <ResgateScreen
      navigation={{ push }}
      route={{
        valorInvestimentos: mockAcoes.saldoTotalDisponivel,
        acoes: mockAcoes.acoes,
        nome: mockAcoes.nome
      }}
    />).toJSON()
  expect(tree).toMatchSnapshot()
})
