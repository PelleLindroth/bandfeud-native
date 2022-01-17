import React, { useContext } from 'react'
import { Pressable, Text } from 'react-native'
import { LogicContext } from '../../../../../../../store/contexts/LogicContext/LogicContext'
import { UIContext } from '../../../../../../../store/contexts/UIContext/UIContext'
import TypeScale from '../../../../../../constants/TypeScale'

const StatusMessage = () => {
  const { handleSetOpponentView } = useContext(LogicContext)!
  const { message, setIsTyping, playerTurn } = useContext(UIContext)!

  return (
    <Pressable
      onPress={() => (playerTurn ? setIsTyping(true) : handleSetOpponentView())}
    >
      <Text style={TypeScale.h2}>{message}</Text>
    </Pressable>
  )
}

export default StatusMessage
