import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Righteous_400Regular } from '@expo-google-fonts/righteous'
import HomeTabs from './navigators/HomeTabs'
import AppLoading from 'expo-app-loading'
import { store } from './store/store'
import { Provider } from 'react-redux'

const App = () => {
  const [fontsLoaded] = useFonts({
    Righteous_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <HomeTabs />
      </NavigationContainer>
      </Provider>
    )
  }
}

export default App