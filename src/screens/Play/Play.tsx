import React, { useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'
import { isFulfilled } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getBandAsync, initPrevious } from '../../store/bandsSlice'
import { isEvenNumber } from '../../global-utils'
import { Message, Time } from './types'
import BaseView from '../../components/BaseView'
import MainView from './components/MainView'
import PlayerInput from './components/PlayerInput'
import TopLogo from './components/TopLogo'
import { NavigationProps } from '../../constants/Type'

export const Play = ({ navigation }: NavigationProps) => {
  const dispatch = useAppDispatch()
  const { approved, bands, previous, used } = useAppSelector(
    (state) => state.bands
  )
  const { game } = useAppSelector((state) => state.game)

  const [message, setMessage] = useState<Message>(Message.TYPE)
  const [isTyping, setIsTyping] = useState(false)
  const [showPrevious, setShowPrevious] = useState<boolean>(true)

  useEffect(() => {
    dispatch(initPrevious())
  }, [])

  useEffect(() => {
    if (approved) {
      handleGetBand()
    }
  }, [used])

  const handleGetBand = async () => {
    if (isEvenNumber(bands.length) && previous) {
      const action = await dispatch(getBandAsync({ used, previous }))
      if (isFulfilled(action)) {
        setMessage(Message.GET_READY)
        setTimeout(() => {
          setShowPrevious(true)
          setMessage(Message.TYPE)
        }, Time.medium)
      }
    }
  } // lägga denna i MainView kanske?

  return (
    <BaseView>
      <TopLogo />
      <MainView bands={bands} game={game} isTyping={isTyping} />
      <PlayerInput
        message={message}
        navigation={navigation}
        setMessage={setMessage}
        isTyping={isTyping}
        setIsTyping={setIsTyping}
        showPrevious={showPrevious}
        setShowPrevious={setShowPrevious}
      />
    </BaseView>
  )
}

export default Play
