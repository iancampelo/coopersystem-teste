import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native'

const ResgateScreen = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [investimentos, setInvestimentos] = useState([])

  return (
    <View style={[styles.container]}>
      {/* <Text>
        DADOS DO INVESTIMENTO
      </Text>
      <FlatList
        data={investimentos}
        renderItem={
          ({item}) =>
            <Text style={styles.item}>
              {item.nome} - {item.objetivo} R$ {item.saldoTotalDisponivel}
            </Text>
        }
      /> */}
      <Text>TOTAL {route.params.valorInvestimentos}</Text>
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
