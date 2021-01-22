import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native'
import api from '../../util/api'

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [investimentos, setInvestimentos] = useState([])

  useEffect(() => {
    const response = await api.getInvestimentos()
    if (response.data) {
      
    }
  }, [investimentos])

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
              Lista aqui!
            </Text>
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
  }
});

export default HomeScreen