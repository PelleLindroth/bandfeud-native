import React, { useContext } from 'react'
import { Text } from 'react-native'
import { LogicContext } from '../../../../../store/contexts/LogicContext/LogicContext'
import { UIContext } from '../../../../../store/contexts/UIContext/UIContext'
import styles from '../styles'

const Previous = () => {
  const { previous } = useContext(LogicContext)!
  const { showPrevious } = useContext(UIContext)!

  return showPrevious ? <Text style={styles.previous}>{previous}</Text> : null
}

export default Previous
