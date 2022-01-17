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
import { LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy'
import MainStack from './navigators/MainStack'
import AppLoading from 'expo-app-loading'
import { store } from './store'
import LogicContextProvider from './store/contexts/LogicContext/LogicContext'

const App = () => {
  const [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
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
        <LogicContextProvider>
          <StatusBar barStyle={'light-content'} />
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </LogicContextProvider>
      </Provider>
    )
  }
}

export default App
