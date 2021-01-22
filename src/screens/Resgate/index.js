import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import { percentualToValor, normalizeMoneyString, useForm } from '../../util/functions'
import ResgateAcao from '../../components/ResgateAcao'

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>RESGATE EFETUADO!</Text>
            <Text>O valor solicitado estará em sua conta em até 5 dias úteis!</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('Home')
              }}
            >
              <Text style={styles.textStyle}>NOVO RESGATE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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
            <ResgateAcao
              acao={acao}
              limit={percentualToValor(valorTotal, acao.percentual)}
              changeHandler={changeHandler}
              inputValue={formState.inputs[acao.nome][1]}
            />
        }
      />
      <Text>Valor total a resgatar {normalizeMoneyString(valorTotalResgate)}</Text>
      <Button
        title="CONFIRMAR RESGATE"
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
        disabled={!isFormValid}
      />
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ResgateScreen
