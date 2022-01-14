import { Band } from '../../../../store/bandsSlice'

export type MainViewProps = {
  isTyping: boolean
  bands: Band[]
  game: boolean
}
