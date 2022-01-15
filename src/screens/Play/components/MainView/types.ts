import { Band } from '../../../../store/bandsSlice'
import { Message } from '../../../../constants/Enums'

export type MainViewProps = {
  isTyping: boolean
  bands: Band[]
}

export type FeedbackProps = {
  message: Message
}

export type BandViewTypes = {
  currentBand: Band | undefined
  isTyping: boolean
}
