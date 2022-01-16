import React, { useEffect, useState } from 'react'
import { isFulfilled } from '@reduxjs/toolkit'
import {
  Band,
  getBandAsync,
  checkBandAsync,
  initPrevious,
  resetBandsState,
} from '../bandsSlice'
import { checkHighscoreAsync, resetPlayerHasHighscore } from '../highscoreSlice'
import { useAppSelector, useAppDispatch } from '../hooks'
import { Message } from '../../constants/Enums'
import { GameContextInterface } from './GameTypes'

export const GameContext = React.createContext<GameContextInterface | null>(
  null
)

const GameContextProvider = (props: any) => {
  const dispatch = useAppDispatch()
  const { bands, previous, used, approved } = useAppSelector(
    (state) => state.bands
  )
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

  const handleStartGame = () => {
    dispatch(initPrevious())
    dispatch(resetPlayerHasHighscore())
    setScore(0)
    setCount(20)
    setMessage(Message.TYPE)
    setShowPrevious(true)
    setGame(true)
  }

  const handleCheckBand = async () => {
    setCheckingScreen()
    setMessage(Message.EMPTY)
    if (!matchesPrevious()) {
      endGame(Message.WRONG_LETTER)
    } else if (isUsed()) {
      endGame(Message.ALREADY_USED)
    } else {
      const action = await dispatch(
        checkBandAsync(inputText.trim().toLowerCase())
      )
      if (isFulfilled(action)) {
        setCurrentBand(action.payload)
        setMessage(Message.WAITING)
        setWaiting(true)
        setCurrentFeedback(Message.CORRECT)
        setShowFeedback(true)
        setPlayerTurn(false)
        getOpponentBand()
      } else {
        endGame(Message.NOT_FOUND)
      }
    }
  }

  const handleOpponentTurn = async () => {
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
      setMessage(Message.PLAY)
      setWaiting(false)
    }
  }

  const setCheckingScreen = () => {
    setShowPrevious(false)
    setIsTyping(false)
    setInputText('')
    setCurrentFeedback(Message.CHECKING)
    setShowFeedback(true)
  }

  const endGame = async (message: Message) => {
    setGame(false)
    setCurrentFeedback(message)
    setShowFeedback(true)

    const action = await dispatch(checkHighscoreAsync(score))

    if (isFulfilled(action)) {
      console.log(action)
      dispatch(resetBandsState())
    }
  }

  const matchesPrevious = () => {
    return previous === inputText.slice(0, 1).toLowerCase()
  }

  const isUsed = () => {
    return used.includes(inputText.trim().toLowerCase())
  }

  const gameContext: GameContextInterface = {
    game,
    bands,
    currentBand,
    previous,
    used,
    approved,
    message,
    waiting,
    playerTurn,
    handleOpponentTurn,
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
    handleStartGame,
    handleCheckBand,
    endGame,
  }

  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContextProvider
