import React from 'react'
import {Image, StyleSheet, Dimensions } from 'react-native'

const logoWidth = Dimensions.get("window").width * 0.95
const logoHeight = logoWidth * 0.75

const LogoSquare = () => {
  return (
    <Image style={styles.logoSquare} source={require('../assets/bandfeudLogoSquareGray.png')} />
  )
}

const styles = StyleSheet.create({
  logoSquare: {
    alignSelf: 'center',
    height: logoHeight,
    opacity: 0.3,
    position: 'absolute',
    width: logoWidth
  }
})

export default LogoSquare