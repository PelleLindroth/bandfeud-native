import { Band } from '../../bandsSlice'
import { Highscore } from '../../highscoreSlice'
import { Message } from '../../../constants/Enums'

export interface LogicContextInterface {
  game: boolean
  bands: Band[]
  currentBand: Band | null
  previous: string | undefined
  used: string[]
  message: Message
  waiting: boolean
  playerTurn: boolean
  setOpponentView: () => void
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
  startGame: () => void
  checkBand: () => void
  endGame: (message: Message) => void
}
