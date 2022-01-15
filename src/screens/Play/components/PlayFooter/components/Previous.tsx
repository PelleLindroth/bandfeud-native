import React, { useContext } from 'react'
import { Text } from 'react-native'
import { GameContext } from '../../../../../store/contexts/GameContext'
import styles from '../styles'

const Previous = () => {
  const { previous, showPrevious } = useContext(GameContext)!

  return showPrevious ? <Text style={styles.previous}>{previous}</Text> : null
}

export default Previous
