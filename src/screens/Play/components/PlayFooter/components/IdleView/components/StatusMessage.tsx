import React, { useContext } from 'react'
import { Pressable, Text } from 'react-native'
import { GameContext } from '../../../../../../../store/contexts/GameContext'
import TypeScale from '../../../../../../../constants/TypeScale'

const StatusMessage = () => {
  const { message, waiting, setIsTyping, playerTurn, handleOpponentTurn } =
    useContext(GameContext)!

  return (
    <Pressable
      disabled={waiting}
      onPress={() => (playerTurn ? setIsTyping(true) : handleOpponentTurn())}
    >
      <Text style={TypeScale.h2}>{message}</Text>
    </Pressable>
  )
}

export default StatusMessage
