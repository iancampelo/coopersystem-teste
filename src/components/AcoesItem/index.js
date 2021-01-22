import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import CurrencyInput from 'react-currency-input'
import { normalizeMoneyString } from '../../util/functions'

const AcoesItem = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const {acao, limit, inputValue} = props

  const handleChange = (event, maskedValue, floatValue) => {
    props.changeHandler(event, maskedValue, floatValue)
    if (Number(floatValue) > limit) {
      setErrorMessage(`Valor não pode ser maior que ${normalizeMoneyString(limit)}`)
    } else {
      setErrorMessage('');
    }
  }

  return (
    <View style={styles.item}>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Ação</Text>
        <Text>{acao.nome}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Saldo acumulado</Text>
        <Text>{normalizeMoneyString(limit)}</Text>
      </View>
      <CurrencyInput
        style={{height: 20}}
        placeholder="Valor a resgatar"
        onChangeEvent={handleChange}
        value={inputValue}
        id={acao.nome}
        allowEmpty={true}
        prefix="R$ "
        decimalSeparator=","
        thousandSeparator="."
        inputType="tel"
      />
      <Text>{errorMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    height: 100,
    backgroundColor: "white",
    marginBottom: 10
  },
  card: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "bold",
  },
});

export default AcoesItem
