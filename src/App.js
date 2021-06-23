import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, StatusBar } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Righteous_400Regular } from '@expo-google-fonts/righteous'
import HomeTabs from './navigators/HomeTabs'
import AppLoading from 'expo-app-loading'

export default function App() {
  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <HomeTabs />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
