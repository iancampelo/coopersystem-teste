import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native'
import { normalizeMoneyString } from '../../util/functions'

const indicadorCarenciaTrue = 'S'
const indicadorCarenciaFalse = 'N'

const InvestimentosItem = (props) => {
  const {investimento, navigation} = props
  const carencia = investimento.indicadorCarencia === indicadorCarenciaTrue

  return (
    <TouchableHighlight
      style={[styles.investimentoItem, carencia ? styles.itemListDisabled : styles.itemList]}
      disabled={carencia}
      onPress={() =>
        navigation.navigate(
          'Resgate', {
            valorInvestimentos: investimento.saldoTotalDisponivel,
            acoes: investimento.acoes,
            nome: investimento.nome
          }
        )
      }>
      <View style={styles.itemContainer}>
        <Text style={styles.itemNome}>
          {investimento.nome} - {investimento.objetivo}
        </Text>
        <Text style={styles.itemValor}>
          {normalizeMoneyString(investimento.saldoTotalDisponivel)}
        </Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  investimentoItem: {
    margin: 10,
    height: 60,

  },
  itemList: {
    backgroundColor: "white",
  },
  itemListDisabled: {
    backgroundColor: "gray",
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    height: 60,
    padding: 15,
  },
  itemNome: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default InvestimentosItem
