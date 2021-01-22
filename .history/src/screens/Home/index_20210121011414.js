import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Alert,
  Button,
  Text,
} from 'react-native'

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [investimentos, setInvestimentos] = useState([])

  useEffect(() => {

  }, [investimentos])
  
  return (
    <View style={[styles.container]}>
      {
      <Text style={[styles.loadingText]}>
        Recebendo lista de investimentos...
      </Text>
      <ActivityIndicator size="large" />
      } : {
        <Text style={[styles.loadingText]}>
          Lista aqui
        </Text>
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