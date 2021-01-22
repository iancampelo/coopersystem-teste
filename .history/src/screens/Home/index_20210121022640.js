import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native'
import api from '../../util/api'

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [investimentos, setInvestimentos] = useState([])

  useEffect(() => {
    (async function callInvestimentos() {
      const response = await api.getInvestimentos()
      console.log(response)
      if (response?.data) {
        setInvestimentos(response.data.listaInvestimentos)
        setIsLoading(false)
        console.log(investimentos)
      }
    })();
    callInvestimentos()
    
  }, [])

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
              renderItem={({item}) => <Text style={styles.item}>{item.nome}</Text>}
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

export default HomeScreen