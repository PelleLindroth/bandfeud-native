import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, StatusBar } from 'react-native'
import HomeTabs from './navigators/HomeTabs'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <HomeTabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
