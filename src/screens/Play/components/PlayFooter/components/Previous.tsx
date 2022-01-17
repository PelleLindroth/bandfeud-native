import React, { useContext } from 'react'
import { Text } from 'react-native'
import { LogicContext } from '../../../../../store/contexts/LogicContext/LogicContext'
import styles from '../styles'

const Previous = () => {
  const { previous, showPrevious } = useContext(LogicContext)!

  return showPrevious ? <Text style={styles.previous}>{previous}</Text> : null
}

export default Previous
