import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native'

import { percentualToValor, normalizeMoneyString, useForm } from '../../util/functions'
import AcoesItem from '../../components/AcoesItem'
import ResgateModal from '../../components/ResgateModal'

const ResgateScreen = ({ navigation, route }) => {
  const valorTotal = route.params.valorInvestimentos
  const acoes = route.params.acoes
  const nomeInvestimento = route.params.nome

  var mappedAcoes = {}
  acoes.forEach(acao => {
    mappedAcoes[acao.nome] = ''
  })

  const [formState, inputHandler] = useForm(mappedAcoes)
  const [valorTotalResgate, setValorTotalResgate] = useState(0)
  const [isFormValid, setIsFormValid] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  const changeHandler = (event, maskedValue, floatValue) => {
    inputHandler(event.target.id, floatValue)
  }

  useEffect(() => {
    setValorTotalResgate(
      Object.keys(formState.inputs)
          .reduce(
            (sum,key) => sum + parseFloat(formState.inputs[key]||0),0)
          )
    setIsFormValid(valorTotalResgate <= valorTotal && valorTotalResgate > 0 ? true : false)
  }, [formState.inputs, valorTotalResgate])

  return (
    <View style={styles.container}>
      <ResgateModal
        visible={modalVisible}
        navigation={navigation}
        title={'RESGATE EFETUADO!'}
        text={'O valor solicitado estará em sua conta em até 5 dias úteis!'}
        buttonText={'NOVO RESGATE'}
      />
      <Text style={styles.title}>DADOS DO INVESTIMENTO</Text>
      <View>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Nome</Text>
          <Text>{nomeInvestimento}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Saldo total disponível</Text>
          <Text>{normalizeMoneyString(valorTotal)}</Text>
        </View>
      </View>
      <Text style={styles.title}>RESGATE DO SEU JEITO</Text>
      <FlatList
        data={acoes}
        keyExtractor={item => item.nome}
        renderItem={
          ({item: acao}) => 
            <AcoesItem
              acao={acao}
              limit={percentualToValor(valorTotal, acao.percentual)}
              changeHandler={changeHandler}
              inputValue={formState.inputs[acao.nome][1]}
            />
        }
      />
      <Text style={styles.title}>Valor total a resgatar {normalizeMoneyString(valorTotalResgate)}</Text>
      <TouchableHighlight
        style={isFormValid ? styles.defaultButton : styles.disabledButton}
        onPress={() => setModalVisible(true)}
        disabled={!isFormValid}
      >
        <Text style={styles.textStyle}>CONFIRMAR RESGATE</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  card: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
  },
  title: {
    padding: 15,
    fontWeight: "bold",
    color: "gray",
  },
  subtitle: {
    fontWeight: "bold",
  },
  loadingText: {
    paddingBottom: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  defaultButton: {
    backgroundColor: '#fae128',
    padding: 10,
    elevation: 2
  },
  disabledButton: {
    backgroundColor: 'gray',
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "#005aa5",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ResgateScreen
