import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Highscores from "../screens/Highscores"
import SingleHighscore from "../screens/SingleHighscore"
const Stack = createStackNavigator()

const HighscoreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Highscores" screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Highscores"
        component={ Highscores }
      />
      <Stack.Screen
        name="Single Highscore"
        component={ SingleHighscore }
      />
    </Stack.Navigator>
  )
}

export default HighscoreStack