import React, { useContext } from 'react'
import { Pressable, Text } from 'react-native'
import { LogicContext } from '../../../../../../../store/contexts/LogicContext/LogicContext'
import TypeScale from '../../../../../../constants/TypeScale'

const StatusMessage = () => {
  const { message, waiting, setIsTyping, playerTurn, setOpponentView } =
    useContext(LogicContext)!

  return (
    <Pressable
      disabled={waiting}
      onPress={() => (playerTurn ? setIsTyping(true) : setOpponentView())}
    >
      <Text style={TypeScale.h2}>{message}</Text>
    </Pressable>
  )
}

export default StatusMessage
