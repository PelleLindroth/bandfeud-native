import React from 'react'
import { Text } from 'react-native'
import TypeScale from '../../../../../constants/TypeScale'
import { Message } from '../../../types'

type MessageViewProps = {
  message: Message
}

const MessageView = (props: MessageViewProps) => {
  const { message } = props
  return <Text style={TypeScale.h2}>{message}</Text>
}

export default MessageView
