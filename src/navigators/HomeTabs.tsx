import React, { FC, useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image } from 'react-native'
import Play from '../features/play/Play'
import About from '../features/about/About'
import Highscores from '../features/highscores/Highscores'
import HighscoreStack from "./HighscoreStack"
import { useAppDispatch } from '../store/hooks'
import { fetchHighscoresAsync } from '../features/highscores/highscoreSlice'
import Color from "../constants/Color"
import { StyleSheet } from "react-native"

const Tab = createBottomTabNavigator()

const HomeTabs : FC = () => {
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
          case 'Play':
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
      style: {
        borderTopWidth: 0
      },
      labelStyle: {
        fontFamily: 'Righteous_400Regular',
        fontSize: 12,
        marginBottom: 10,
        textTransform: 'uppercase'
      }
    }} initialRouteName="Play">
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Play" component={Play} />
      <Tab.Screen name="Highscores" component={HighscoreStack} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  tabIcon: {
    height: 25,
    width: 25, 
    marginTop: 5
  },
  tabIconFocused: {
    height: 30,
   width: 30, 
   marginTop: 5
  }
})


export default HomeTabs