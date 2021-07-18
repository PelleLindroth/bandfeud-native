import React, { useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image } from 'react-native'
import Home from "../screens/Home"
import About from '../screens/About'
import HighscoreStack from "./HighscoreStack"
import { useAppDispatch } from '../store/hooks'
import { fetchHighscoresAsync } from '../store/highscoreSlice'
import Color from "../constants/Color"
import { StyleSheet } from "react-native"

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchHighscoresAsync())
  }, [dispatch])

  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({ focused }) => { 
        switch(route.name) {
          case 'About':
            return <Image style={focused ? styles.tabIconFocused : styles.tabIcon} source={require('../assets/about-icon.png')} />
          case 'Home':
            return <Image style={focused ? styles.tabIconFocused : styles.tabIcon} source={require('../assets/play-icon.png')} />
          case 'Highscores':
            return <Image style={focused ? styles.tabIconFocused : styles.tabIcon} source={require('../assets/highscore-icon.png')} />
        }
      }
    })}
    tabBarOptions={{
      activeBackgroundColor: Color.offBlack,
      inactiveBackgroundColor: Color.offBlack,
      showLabel: false,
      style: [{borderTopWidth: 0}]
    }} initialRouteName="Home">
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Highscores" component={HighscoreStack} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  tabIcon: {
    height: 25,
    width: 25, 
    marginBottom: 10
  },
  tabIconFocused: {
  height: 30,
   width: 30, 
   marginBottom: 10,
  }
})


export default HomeTabs