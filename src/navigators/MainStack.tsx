import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabs from './HomeTabs'
import Play from '../screens/Play'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName="HomeTabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name="Play"
        component={Play}
      />
    </Stack.Navigator>
  )
}

export default MainStack
