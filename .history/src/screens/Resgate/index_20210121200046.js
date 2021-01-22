import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
} from 'react-native'
import { percentualToValor, normalizeMoneyString, useForm } from '../../util/functions'

const ResgateScreen = ({ navigation, route }) => {
  const valorTotal = route.params.valorInvestimentos
  const acoes = route.params.acoes
  const nomeInvestimento = route.params.nome

  const mappedAcoes = acoes.map((e) => {
    const container = {[e.nome]: ""}
    return container
  })

  const testAcoes = {
    name: '',
    email: '',
    address: '',
    phone: '',
    password: ''
  }

  const [formState, inputHandler] = useForm(mappedAcoes)
  const [valorTotalResgate, setValorTotalResgate] = useState(0)

  const changeHandler = e  => {
    e.preventDefault()
    const {id, value} = e.currentTarget
    inputHandler(id, value)

    let total = 0;
    for (let value of formState.inputs) {
      console.log("value")
      console.log(value)
      console.log(value[1])
      const vl = parseInt(value)
      if ()
      total +=  * 1;
    }

    setValorTotalResgate(total)
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
                value={formState.inputs[acao.nome]}
                nativeID={acao.nome}
                keyboardType='numeric'
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
