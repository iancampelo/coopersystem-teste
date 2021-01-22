import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native'

const ResgateScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [investimentos, setInvestimentos] = useState([])

  return (
    <View style={[styles.container]}>
      {
        isLoading ?
          <View>
            <Text style={[styles.loadingText]}>
              Recebendo lista de investimentos...
            </Text>
            <ActivityIndicator size="large" />
          </View>
       :
          <View>
            <Text>
              Cabeçalho
            </Text>
            <FlatList
              data={investimentos}
              renderItem={
                ({item}) =>
                  <Text style={styles.item}>
                    {item.nome} - {item.objetivo} R$ {item.saldoTotalDisponivel}
                  </Text>
              }
            />
          </View>
      }
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
