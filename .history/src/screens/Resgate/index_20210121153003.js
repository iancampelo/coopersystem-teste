import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native'

const ResgateScreen = ({ navigation, route }) => {
  const valorTotal = route.params.valorInvestimentos
  const acoes = route.params.acoes

  return (
    <View style={[styles.container]}>
      <Text>TOTAL R${valorTotal}</Text>
      <FlatList
        data={acoes}
        renderItem={
          ({item}) =>
            <Text>
              {item.nome} - R$ percentualToValor(item.percentual}
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
