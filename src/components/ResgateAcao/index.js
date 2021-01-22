import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import CurrencyInput from 'react-currency-input'
import { normalizeMoneyString } from '../../util/functions'

const ResgateAcao = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const {acao, limit, inputValue} = props

  const handleChange = (event, maskedValue, floatValue) => {
    props.changeHandler(event, maskedValue, floatValue);
    if (Number(floatValue) > limit) {
      setErrorMessage(`Valor não pode ser maior que ${normalizeMoneyString(limit)}`);
    } else {
      setErrorMessage('');
    }
  }

  return (
    <View>
      <Text>Ação {acao.nome}</Text>
      <Text>
        Saldo acumulado {normalizeMoneyString(limit)}
      </Text>
      <CurrencyInput
        style={{height: 40}}
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

})

export default ResgateAcao
