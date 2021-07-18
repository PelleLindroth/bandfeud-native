import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Color from '../constants/Color'

type BaseProps = {
  children: React.ReactNode,
  style?: object
}

const BaseView = (props: BaseProps) => {
  return (
    <SafeAreaView style={[styles.wrapper, props.style && props.style]}>
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: Color.OFF_BLACK,
    flex: 1,
    justifyContent: 'center'
  }
})

export default BaseView