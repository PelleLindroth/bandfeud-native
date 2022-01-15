import React from 'react'
import { View, Image } from 'react-native'
import styles from '../styles'

const GameOverLabel = () => (
  <View style={styles.gameOverWrapper}>
    <Image
      style={styles.gameOverImage}
      source={require('../../../../../assets/game-over.png')}
    />
  </View>
)

export default GameOverLabel
