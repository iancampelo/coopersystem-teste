import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import api from '../../util/api'

const indicadorCarenciaTrue = 'S';
const indicadorCarenciaFalse = 'N';

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
              INVESTIMENTOS - R$
            </Text>
            <FlatList
              data={investimentos}
              renderItem={
                ({item: investimento}) =>
                <TouchableHighlight
                  disabled={investimento.indicadorCarencia === indicadorCarenciaTrue}
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={() =>
                    navigation.navigate(
                      'Resgate', {
                        valorInvestimentos: investimento.saldoTotalDisponivel,
                        acoes: investimento.acoes,
                        nome: investimento.nome
                      }
                    )
                  }>
                  <Text style={styles.item}>
                    {investimento.nome} - {investimento.objetivo} {normalizeMoneyStringinvestimento.saldoTotalDisponivel}
                  </Text>
                </TouchableHighlight>
              }
            />
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center"
  // },
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
