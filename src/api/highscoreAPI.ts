import axios from 'axios'
import { Highscore } from '../store/highscoreSlice'

const highscoresAPI = axios.create({
  baseURL: 'https://bandfeud-api.herokuapp.com/api/highscores'
})

export const fetchHighscores = () => {
  return new Promise<Highscore[]>(async (resolve, reject) => {
    try {
      const highscores = await highscoresAPI.get('/get')
      resolve(highscores.data)
    } catch (err) {
      reject(err)
    }
  }
  )
}