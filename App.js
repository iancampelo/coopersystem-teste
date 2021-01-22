import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/Home'
import ResgateScreen from './src/screens/Resgate'

const Stack = createStackNavigator();

export default function App() {
  const navTheme = DefaultTheme;
  navTheme.colors.background = '#f4f4f4';

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#005aa5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Resgate' }}
        />
        <Stack.Screen
          name="Resgate"
          component={ResgateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
