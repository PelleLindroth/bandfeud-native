import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BaseView from '../../components/BaseView'
import LogoSquare from '../../components/LogoSquare'
import TypeScale from '../../constants/TypeScale'

const About = () => {
  return (
    <BaseView>
      <LogoSquare />
      <View style={styles.textBlock}>
        <Text style={TypeScale.h1}>How to play</Text>
        <Text style={[TypeScale.h2, styles.headlineBlock]}>
          Your turn {'>>'}
        </Text>
        <Text style={TypeScale.p}>
          Type in a band or an artist name beginning with the letter visible
          under the input field.
        </Text>
        <Text style={TypeScale.p}>
          Band or artist names must contain at least two letters or numbers. It
          must begin and end with a letter between a and z or a number.
        </Text>
        <Text style={TypeScale.p}>
          Wait while the app checks if the name exists in the Discogs database.
        </Text>
        <Text style={TypeScale.p}>
          If the name exists, your score increases. The longer the band name,
          the more points you get.
        </Text>
        <Text style={[TypeScale.h2, styles.headlineBlock]}>
          App turn {'>>'}
        </Text>
        <Text style={TypeScale.p}>
          Next, the app will present a band or an artist.{' '}
        </Text>
        <Text style={TypeScale.p}>
          You now need to submit a band or artist name that begins with the last
          letter of the name the app presented.
        </Text>
      </View>
    </BaseView>
  )
}

const styles = StyleSheet.create({
  headlineBlock: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  textBlock: {
    paddingHorizontal: 20,
  },
})

export default About
