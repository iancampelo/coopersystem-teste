import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
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
    <div>
      <Text>
        Home Screen
      </Text>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default HomeScreen