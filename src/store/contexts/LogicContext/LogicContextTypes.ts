import { Highscore } from '../../highscoreSlice'

export interface LogicContextInterface {
  game: boolean
  previous: string | undefined
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  inputText: string
  setInputText: React.Dispatch<React.SetStateAction<string>>
  highscores: Highscore[]
  startGame: () => void
  checkBand: () => void
  handleSetOpponentView: () => void
}
