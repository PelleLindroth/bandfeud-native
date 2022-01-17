import { Band } from '../../bandsSlice'
import { Message } from '../../../screens/constants/Enums'

export interface UIContextInterface {
  currentBand: Band | null
  message: Message
  isTyping: boolean
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>
  playerTurn: boolean
  currentFeedback: Message
  showFeedback: boolean
  setStartView: () => void
  setCheckingView: () => void
  setResultsView: (band: Band) => void
  setOpponentView: (band: Band) => void
  setReadyView: () => void
  setGameOverView: (message: Message) => void
  showPrevious: Boolean
}
