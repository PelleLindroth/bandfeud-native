import React from 'react'
import { SafeAreaView, StyleSheet, GestureResponderEvent } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Color from '../../../constants/Color'
import styles from './styles'

type BaseProps = {
  children: React.ReactNode
  style?: object
  onPress?: (event: GestureResponderEvent) => void
}

const BaseView = (props: BaseProps) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Color.BLACK, Color.OFF_BLACK]}
      locations={[0.5, 1]}
    >
      <SafeAreaView style={[styles.wrapper, props.style && props.style]}>
        {props.children}
      </SafeAreaView>
    </LinearGradient>
  )
}

export default BaseView
