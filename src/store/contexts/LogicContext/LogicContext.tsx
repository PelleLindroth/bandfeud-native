import React, { useContext, useEffect, useState } from 'react'
import { isFulfilled } from '@reduxjs/toolkit'
import {
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
import { UIContext } from '../UIContext/UIContext'

export const LogicContext = React.createContext<LogicContextInterface | null>(
  null
)

const LogicContextProvider = (props: any) => {
  const dispatch = useAppDispatch()
  const { bands, previous, used } = useAppSelector((state) => state.bands)
  const { highscores } = useAppSelector((state) => state.highscores)
  const {
    setStartView,
    setCheckingView,
    setResultsView,
    setOpponentView,
    setReadyView,
    setGameOverView,
  } = useContext(UIContext)!

  const [game, setGame] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)
  const [count, setCount] = useState<number>(20)
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
    setStartView()
    setGame(true)
  }

  const checkBand = async () => {
    setCheckingView()
    setInputText('')

    const error = checkError()
    if (error) return

    const action = await dispatch(
      checkBandAsync(inputText.trim().toLowerCase())
    )

    if (isFulfilled(action)) {
      setResultsView(action.payload)
    } else {
      endGame(Message.NOT_FOUND)
    }
  }

  const handleSetOpponentView = async () => {
    setOpponentView(bands[bands.length - 1])
  }

  const getOpponentBand = async () => {
    const action = await dispatch(getBandAsync({ used, previous: previous! }))

    if (isFulfilled(action)) {
      setReadyView()
    }
  }

  const endGame = async (message: Message) => {
    setGame(false)
    setGameOverView(message)

    // kanske ny funktion härifrån: checkHighscore sen tillbaka och avsluta
    const action = await dispatch(checkHighscoreAsync(score))

    if (isFulfilled(action)) {
      // if highscore
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
    previous,
    score,
    setScore,
    count,
    setCount,
    inputText,
    setInputText,
    highscores,
    startGame,
    checkBand,
    handleSetOpponentView,
  }

  return (
    <LogicContext.Provider value={logicContext}>
      {props.children}
    </LogicContext.Provider>
  )
}

export default LogicContextProvider
