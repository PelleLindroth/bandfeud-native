import { Band } from '../bandsSlice'
import { Highscore } from '../highscoreSlice'
import { Message } from '../../constants/Enums'
import { GetBandPayload } from '../../api/types'
import { PayloadAction } from '@reduxjs/toolkit'

export interface GameContextInterface {
  game: boolean
  bands: Band[]
  displayedBands: Band[]
  previous: string | undefined
  used: string[]
  approved: boolean
  message: Message
  waiting: boolean
  playerTurn: boolean
  handleOpponentTurn: () => void
  showFeedback: boolean
  currentFeedback: Message
  inputText: string
  setInputText: React.Dispatch<React.SetStateAction<string>>
  isTyping: boolean
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>
  highscores: Highscore[]
  playerHasHighscore: boolean
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  showPrevious: boolean
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  handleStartGame: () => void
  handleCheckBand: () => void
  endGame: (message: Message) => void
}
