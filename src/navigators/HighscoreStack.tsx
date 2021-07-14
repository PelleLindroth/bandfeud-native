import React, {FC} from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Highscores from "../features/highscores/Highscores"
import SingleHighscore from "../features/highscores/SingleHighscore"
import { setStatusBarHidden } from "expo-status-bar"
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