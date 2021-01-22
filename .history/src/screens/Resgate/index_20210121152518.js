import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native'

const ResgateScreen = ({ navigation, route }) => {
  const valorTotal = route.params.valorInvestimentos;
  const acoes = 
  return (
    <View style={[styles.container]}>
      <FlatList
        data={investimentos}
        renderItem={
          ({item}) =>
            <Text style={styles.item}>
              {item.nome} - {item.objetivo} R$ {item.saldoTotalDisponivel}
            </Text>
        }
      />
      <Text>TOTAL {route.params.valorInvestimentos}</Text>
      <Text>Ações: {`${route.params.acoes}`}</Text>
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
