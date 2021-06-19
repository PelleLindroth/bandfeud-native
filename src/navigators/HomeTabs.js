import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Play from '../screens/Play'
import About from '../screens/About'
import Highscores from '../screens/Highscores'

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Play" component={Play} />
      <Tab.Screen name="Highscores" component={Highscores} />
    </Tab.Navigator>
  )
}

export default HomeTabs