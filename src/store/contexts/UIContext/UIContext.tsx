import React, { useState } from 'react'
import { Band } from '../../bandsSlice'
import { Message } from '../../../screens/constants/Enums'
import { UIContextInterface } from './UIContextTypes'

export const UIContext = React.createContext<UIContextInterface | null>(null)

export const UIContextProvider = (props: any) => {
  const [showPrevious, setShowPrevious] = useState<boolean>(true)
  const [currentFeedback, setCurrentFeedback] = useState<Message>(
    Message.CORRECT
  )
  const [currentBand, setCurrentBand] = useState<Band | null>(null)
  const [message, setMessage] = useState<Message>(Message.TYPE)
  const [playerTurn, setPlayerTurn] = useState<boolean>(true)
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [showFeedback, setShowFeedback] = useState<boolean>(false)

  const setStartView = () => {
    setMessage(Message.TYPE)
    setCurrentBand(null)
    setCurrentFeedback(Message.EMPTY)
    setShowFeedback(false)
    setShowPrevious(true)
  }

  const setCheckingView = () => {
    setShowPrevious(false)
    setIsTyping(false)
    setCurrentFeedback(Message.CHECKING)
    setShowFeedback(true)
    setMessage(Message.EMPTY)
  }

  const setResultsView = (band: Band) => {
    setCurrentBand(band)
    setMessage(Message.WAITING)
    setCurrentFeedback(Message.YES)
    setShowFeedback(true)
    setPlayerTurn(false)
  }

  const setOpponentView = (band: Band) => {
    if (message === Message.WAITING) return
    setCurrentFeedback(Message.OPPONENT)
    setCurrentBand(band)
    setShowPrevious(true)
    setMessage(Message.TYPE)
    setPlayerTurn(true)
  }

  const setReadyView = () => {
    setMessage(Message.PLAY)
  }

  const setGameOverView = (message: Message) => {
    setCurrentFeedback(message)
    setShowFeedback(true)
  }

  const uiContext: UIContextInterface = {
    currentBand,
    message,
    playerTurn,
    currentFeedback,
    showFeedback,
    showPrevious,
    isTyping,
    setIsTyping,
    setStartView,
    setCheckingView,
    setResultsView,
    setOpponentView,
    setReadyView,
    setGameOverView,
  }

  return (
    <UIContext.Provider value={uiContext}>{props.children}</UIContext.Provider>
  )
}

export default UIContextProvider
