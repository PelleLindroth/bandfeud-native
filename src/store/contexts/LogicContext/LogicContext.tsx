import React, { useEffect, useState } from 'react'
import { isFulfilled } from '@reduxjs/toolkit'
import {
  Band,
  getBandAsync,
  checkBandAsync,
  initPrevious,
  resetBandsState,
} from '../../bandsSlice'
import {
  checkHighscoreAsync,
  resetPlayerHasHighscore,
} from '../../highscoreSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { Message } from '../../../screens/constants/Enums'
import { LogicContextInterface } from './LogicContextTypes'

export const LogicContext = React.createContext<LogicContextInterface | null>(
  null
)

const LogicContextProvider = (props: any) => {
  const dispatch = useAppDispatch()
  const { bands, previous, used } = useAppSelector((state) => state.bands)
  const { highscores, playerHasHighscore } = useAppSelector(
    (state) => state.highscores
  )
  const [showPrevious, setShowPrevious] = useState<boolean>(true)
  const [game, setGame] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)
  const [count, setCount] = useState<number>(20)
  const [currentFeedback, setCurrentFeedback] = useState<Message>(
    Message.CORRECT
  )
  const [showFeedback, setShowFeedback] = useState<boolean>(false)
  const [currentBand, setCurrentBand] = useState<Band | null>(null)
  const [message, setMessage] = useState<Message>(Message.TYPE)
  const [waiting, setWaiting] = useState<boolean>(false)
  const [playerTurn, setPlayerTurn] = useState<boolean>(true)
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>('')

  useEffect(() => {
    if (bands.length % 2 !== 0) {
      getOpponentBand()
    }
  }, [bands])

  const startGame = () => {
    dispatch(initPrevious())
    dispatch(resetPlayerHasHighscore())
    setScore(0)
    setCount(20)
    setMessage(Message.TYPE) // UI - setStartView
    setCurrentBand(null)
    setCurrentFeedback(Message.EMPTY) // UI - setStartView
    setShowFeedback(false) // UI - setStartView
    setShowPrevious(true) // UI - setStartView
    setGame(true)
  }

  const checkBand = async () => {
    setCheckingView() // UI

    const error = checkError()
    if (error) return

    const action = await dispatch(
      checkBandAsync(inputText.trim().toLowerCase())
    )

    if (isFulfilled(action)) {
      setCurrentBand(action.payload)
      setMessage(Message.WAITING) // UI - setResultView
      setWaiting(true) // UI - setResultView
      setCurrentFeedback(Message.YES) // UI - setResultView
      setShowFeedback(true) // UI - setResultView
      setPlayerTurn(false) // UI - setResultView
    } else {
      endGame(Message.NOT_FOUND)
    }
  }

  const setOpponentView = async () => {
    // UI
    if (message === Message.WAITING) return
    setCurrentFeedback(Message.OPPONENT)
    setCurrentBand(bands[bands.length - 1])
    setShowPrevious(true)
    setMessage(Message.TYPE)
    setPlayerTurn(true)
  }

  const getOpponentBand = async () => {
    const action = await dispatch(getBandAsync({ used, previous: previous! }))

    if (isFulfilled(action)) {
      setMessage(Message.PLAY) // UI - setReadyView
      setWaiting(false) // UI - setReadyView
    }
  }

  const setCheckingView = () => {
    // UI
    setShowPrevious(false)
    setIsTyping(false)
    setInputText('')
    setCurrentFeedback(Message.CHECKING)
    setShowFeedback(true)
    setMessage(Message.EMPTY)
  }

  const endGame = async (message: Message) => {
    setGame(false)
    setCurrentFeedback(message) // UI - setGameOverView
    setShowFeedback(true) // UI - setGameOVerView

    // kanske ny funktion härifrån
    const action = await dispatch(checkHighscoreAsync(score))

    if (isFulfilled(action)) {
      // checka om man ska gå hem eller till highscoresidan
      dispatch(resetBandsState())
    }
  }

  const checkError = () => {
    if (!matchesPrevious()) {
      endGame(Message.WRONG_LETTER)
      return true
    } else if (isUsed()) {
      endGame(Message.ALREADY_USED)
      return true
    }

    return false
  }

  const matchesPrevious = () => {
    return previous === inputText.slice(0, 1).toLowerCase()
  }

  const isUsed = () => {
    return used.includes(inputText.trim().toLowerCase())
  }

  const logicContext: LogicContextInterface = {
    game,
    bands,
    currentBand,
    previous,
    used,
    message,
    waiting,
    playerTurn,
    setOpponentView,
    currentFeedback,
    showFeedback,
    inputText,
    setInputText,
    isTyping,
    setIsTyping,
    highscores,
    playerHasHighscore,
    score,
    setScore,
    showPrevious,
    count,
    setCount,
    startGame,
    checkBand,
    endGame,
  }

  return (
    <LogicContext.Provider value={logicContext}>
      {props.children}
    </LogicContext.Provider>
  )
}

export default LogicContextProvider
