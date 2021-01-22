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
  
  return (
    <div>
      <Text>
        Home Screen
      </Text>
    </div>
  )
}

export default HomeScreen