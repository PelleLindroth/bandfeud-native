import React from 'react'
import { View, Text } from 'react-native'
import { FeedbackProps } from '../types'
import styles from '../styles'

const Feedback = (props: FeedbackProps) => {
  const { message } = props

  return (
    <View style={styles.messageView}>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

export default Feedback
