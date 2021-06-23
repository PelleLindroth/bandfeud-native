import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Color from '../constants/Color'
const logoWidth = Dimensions.get("window").width * 0.95
const logoHeight = logoWidth * 0.75

const About = () => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.logoSquare} source={require('../assets/bandfeudLogoSquareGray.png')} />
      <View style={styles.textBlock}>
        <Text style={styles.h1}>How to play</Text>
        <Text style={styles.h2}>Your turn</Text>
        <Text style={styles.p}>
          Type in a band or an artist beginning with the letter visible under
          the input field.
        </Text>
        <Text style={styles.p}>
          Band or artist names must contain at least two letters or numbers. It
          must begin and end with a letter between a and z or a number.
        </Text>
        <Text style={styles.p}>
          Wait while the app checks if the name exists in the Discogs database.
        </Text>
        <Text style={styles.p}>
          If the name exists, your score increases. The longer the band name,
          the more points you get.
        </Text>
        <Text style={styles.h2}>App turn</Text>
        <Text style={styles.p}>Next, the app will present a band or an artist. </Text>
        <Text style={styles.p}>
          You now need to submit a band or artist name that begins with the last
          letter of the name the app presented.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    backgroundColor: Color.offBlack,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  logoSquare: {
    height: logoHeight,
    width: logoWidth,
    position: 'absolute',
    alignSelf: 'center'
  },
  textBlock: {
    paddingHorizontal: 20
  },
  h1: {
    color: Color.offWhite,
    fontSize: 20,
    fontFamily: 'Righteous_400Regular',
    marginBottom: 8,
    textShadowColor: '#fff',
    textShadowRadius: 2
  },
  h2: {
    color: Color.offWhite,
    fontSize: 15,
    fontFamily: 'Righteous_400Regular',
    marginBottom: 4,
    textShadowColor: '#fff',
    textShadowRadius: 1
  },
  p: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    marginBottom: 5,
    marginLeft: 5,
  }
})

export default About
