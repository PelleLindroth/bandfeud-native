import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Righteous_400Regular } from '@expo-google-fonts/righteous'
import MainStack from './navigators/MainStack'
import AppLoading from 'expo-app-loading'
import { store } from './store'

const App = () => {
  const [fontsLoaded] = useFonts({
    Righteous_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
