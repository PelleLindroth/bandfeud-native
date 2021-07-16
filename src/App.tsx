import React from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Righteous_400Regular } from '@expo-google-fonts/righteous'
import HomeTabs from './navigators/HomeTabs'
import AppLoading from 'expo-app-loading'
import { store } from './store'
import { Provider } from 'react-redux'

// REFACTOR
// put one feature directory for each slice in store directory, skip features folder
// slices: SCORE, BANDS and UX
// screens in screens, components in components etc

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
        <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <HomeTabs />
      </NavigationContainer>
      </Provider>
    )
  }
}

export default App
