import axios from 'axios'
import { Highscore } from '../store/highscoreSlice'

export const fetchHighscores = () => {
  return new Promise<{ data: Highscore[] }>(async (resolve, reject) => {
    const highscores = await axios.get('https://bandfeud-api.herokuapp.com/api/highscores/get')

    resolve(highscores)
  }
  )
}