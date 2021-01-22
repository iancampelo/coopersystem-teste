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
  const valorTotal
  return (
    <View style={[styles.container]}>
      
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
