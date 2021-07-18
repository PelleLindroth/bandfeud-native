import React from 'react'
import { NavigationProps } from "../constants/Type"
import { StyleSheet, Pressable, Image, Text } from 'react-native'
import BaseView from '../components/BaseView'
import Color from '../constants/Color'
import TypeScale from '../constants/TypeScale'
import * as Measure from '../constants/Measure'

export const Play = ({ navigation }: NavigationProps) => {
  

  return (
    <BaseView style={{backgroundColor: Color.gold}}>
    <Pressable onPress={() => navigation.navigate('Home')}>
      <Image style={styles.icon} source={require('../assets/back-icon.png')} />
    </Pressable>
      <Text style={TypeScale.h2}>PLAY</Text>
    </BaseView>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: Measure.iconSide,
    width: Measure.iconSide
  }
})

export default Play