import React from "react"
import { Pressable, Image, StyleSheet } from "react-native"
import { NavigationProps } from "../constants/Type"
import BaseView from "../components/BaseView"
import * as Measure from '../constants/Measure'

const Home = ({ navigation }: NavigationProps) => {
  return (
    <BaseView>
      <Image style={styles.logo} source={require('../assets/bandfeud-logo-square.png')} />
      <Pressable onPress={() => navigation.navigate('Play')}>
        <Image style={styles.playIcon} source={require('../assets/play-icon.png')} />
      </Pressable>
    </BaseView>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: Measure.WINDOW_WIDTH * 0.5,
    width: Measure.WINDOW_WIDTH * 0.7,
    marginBottom: 20
  },
  playIcon: {
    height: Measure.ICON_SIDE, 
    width: Measure.ICON_SIDE
  },
  input: {
    backgroundColor: 'white', 
    width: 200, 
    height: 40}
})

export default Home