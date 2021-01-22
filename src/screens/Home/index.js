import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native'
import api from '../../util/api'
import InvestimentosItem from '../../components/InvestimentosItem'

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [investimentos, setInvestimentos] = useState([])

  useEffect(() => {
    (async function callInvestimentos() {
      const res = await api.getInvestimentos()
      if (res?.data) {
        setInvestimentos(res.data.response.data.listaInvestimentos)
        setIsLoading(false)
      }
    })();
  }, [])

  return (
    <View>
      {
        isLoading ?
          <View style={styles.loadingText}>
            <Text>
              Recebendo lista de investimentos...
            </Text>
            <ActivityIndicator size="large" />
          </View>
       :
          <View>
            <Text style={styles.title}>
              INVESTIMENTOS - R$
            </Text>
            <FlatList
              data={investimentos}
              keyExtractor={item => item.nome}
              renderItem={({item}) =>
                <InvestimentosItem investimento={item} navigation={navigation} />
              }
            />
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  loadingText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  title: {
    padding: 15,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 10
  },
});

export default HomeScreen
