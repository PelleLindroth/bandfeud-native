import React, { useState } from 'react'
import { Image } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { isFulfilled } from '@reduxjs/toolkit'
import { endGame } from '../../../../store/gameSlice'
import { checkBandAsync, clear } from '../../../../store/bandsSlice'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  Pressable,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import TypeScale from '../../../../constants/TypeScale'
import { Message, Time } from '../../types'
import InputField from '../InputField'
import styles from './styles'
import MessageView from './components/MessageView'

type PlayerInputProps = {
  message: Message
  navigation: NavigationScreenProp<any, any>
  setMessage: React.Dispatch<React.SetStateAction<Message>>
  isTyping: boolean
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>
  showPrevious: boolean
  setShowPrevious: React.Dispatch<React.SetStateAction<boolean>>
}

const PlayerInput = (props: PlayerInputProps) => {
  const dispatch = useAppDispatch()
  const { game } = useAppSelector((state) => state.game)
  const { previous, used } = useAppSelector((state) => state.bands)
  const { setMessage } = props
  const [inputText, setInputText] = useState<string>('')

  const matchesPrevious = () => {
    return previous === inputText.slice(0, 1).toLowerCase()
  }

  const isUsed = () => {
    return used.includes(inputText.trim().toLowerCase())
  }

  const setCheckingScreen = () => {
    props.setShowPrevious(false)
    props.setIsTyping(false)
    setInputText('')
    props.setMessage(Message.CHECKING)
  }

  const handleGameOver = (message: Message) => {
    setMessage(message)
    dispatch(endGame())
    dispatch(clear())
  }

  const handleCheckBand = async () => {
    setCheckingScreen()

    if (!matchesPrevious()) {
      handleGameOver(Message.WRONG_LETTER)
    } else if (isUsed()) {
      handleGameOver(Message.ALREADY_USED)
    } else {
      const action = await dispatch(
        checkBandAsync(inputText.trim().toLowerCase())
      )
      if (isFulfilled(action)) {
        setMessage(Message.CORRECT)
      } else {
        handleGameOver(Message.NOT_FOUND)
      }
    }
  }

  return (
    <>
      {props.isTyping ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.footer}
        >
          {props.showPrevious && (
            <Text style={styles.previous}>{previous}</Text>
          )}
          <InputField
            inputText={inputText}
            setInputText={setInputText}
            handleCheckBand={handleCheckBand}
          />
        </KeyboardAvoidingView>
      ) : (
        <View style={styles.footer}>
          {props.showPrevious && (
            <Text style={styles.previous}>{previous}</Text>
          )}
          {game ? (
            <Pressable onPress={() => props.setIsTyping(true)}>
              <Text style={TypeScale.h2}>{props.message}</Text>
            </Pressable>
          ) : (
            <>
              <MessageView message={props.message} />
              <Pressable
                onPress={() => !game && props.navigation.navigate('Home')}
              >
                <Image
                  style={styles.closeIcon}
                  source={require('../../../../assets/close-icon.png')}
                />
              </Pressable>
            </>
          )}
        </View>
      )}
    </>
  )
}

export default PlayerInput
