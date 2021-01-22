import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native'
import {percentualToValor} from '../../util/functions'

const ResgateScreen = ({ navigation, route }) => {
  const valorTotal = route.params.valorInvestimentos
  const acoes = route.params.acoes
  const nomeInvestimento = route.params.nome

  return (
    <View style={[styles.container]}>
      <Text>DADOS DO INVESTIMENTO</Text>
      <View>
        <Text>Nome {}</Text>
      </View>
      <FlatList
        data={acoes}
        renderItem={
          ({item: acao}) =>
            <Text>
              {acao.nome} - R$ {percentualToValor(valorTotal, acao.percentual)}
            </Text>
        }
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
});

export default ResgateScreen
