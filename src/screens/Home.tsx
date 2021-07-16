import React from "react"
import { Image, StyleSheet } from "react-native"
import BaseView from "../components/BaseView"
import * as Measure from '../constants/Measure'

const Home = () => {
  return (
    <BaseView>
     <Image style={styles.logo} source={require('../assets/bandfeud-logo-square.png')} />
     <Image style={styles.playIcon} source={require('../assets/play-icon.png')} />
    </BaseView>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: Measure.windowWidth * 0.5,
    width: Measure.windowWidth * 0.7,
    marginBottom: 20
  },
  playIcon: {
    height: 40, 
    width: 40
  },
  input: {
    backgroundColor: 'white', 
    width: 200, 
    height: 40}
})

export default Home