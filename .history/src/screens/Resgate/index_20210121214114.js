import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
} from 'react-native'
import CurrencyInput from 'react-currency-input'
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
    console.log(e)
    // const {id, value} = e.currentTarget
    // inputHandler(id, value)
  }
  
  useEffect(() => {
    setValorTotalResgate(Object.keys(formState.inputs).reduce((sum,key)=> sum + parseFloat(formState.inputs[key]||0),0))
  }, [formState])

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
              <CurrencyInput
                style={{height: 40}}
                placeholder="Valor a resgatar"
                onChange={changeHandler}
                value={formState.inputs[acao.nome][1]}
                nativeID={acao.nome}
                id={acao.nome}
                allowEmpty={true}
                prefix="R$ "
              />
            </View>
        }
      />
      <Text>Valor total a resgatar {normalizeMoneyString(valorTotalResgate)}</Text>
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
