import React from 'react'
import { Image } from 'react-native'
import styles from '../styles'
const TopLogo = () => {
  return (
    <Image
      source={require('../../../assets/bandfeud-logo.png')}
      style={styles.logo}
    />
  )
}

export default TopLogo
