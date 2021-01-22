import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
} from 'react-native'
import { percentualToValor, normalizeMoneyString, useForm } from '../../util/functions'

const ResgateScreen = ({ route }) => {
  const valorTotal = route.params.valorInvestimentos
  const acoes = route.params.acoes
  const nomeInvestimento = route.params.nome

  var mappedAcoes = {}
  acoes.forEach(acao => {
    mappedAcoes[acao.nome] = ''
  })

  const [formState, inputHandler] = useForm(mappedAcoes)
  const [valorTotalResgate, setValorTotalResgate] = useState(0)

  const changeHandler = e  => {
    const {id, value} = e.currentTarget
    inputHandler(id, value)
  }

  return (
    <View style={[styles.container]}>
      <Text>DADOS DO INVESTIMENTO</Text>
      <View>
        <Text>Nome {nomeInvestimento}</Text>
        <Text>Saldo total disponível {normalizeMoneyString(valorTotal)}</Text>
      </View>
      <Text>RESGATE DO SEU JEITO</Text>
      <FlatList
        data={acoes}
        renderItem={
          ({item: acao}) =>
            <View>
              <Text>Ação {acao.nome}</Text>
              <Text>
                Saldo acumulado {normalizeMoneyString(percentualToValor(valorTotal, acao.percentual))}
              </Text>
              <TextInput
                style={{height: 40}}
                placeholder="Valor a resgatar"
                onChange={changeHandler}
                value={formState.inputs[acao.nome][1]}
                nativeID={acao.nome}
              />
            </View>
        }
      />
      <Text>Valor total a resgatar {valorTotalResgate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  loadingText: {
    paddingBottom: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ResgateScreen
