import axios, { AxiosResponse } from 'axios'
import { Highscore } from '../store/highscoreSlice'

const highscoresAPI = axios.create({
  baseURL: 'https://bandfeud-api.herokuapp.com/api/highscores',
})

export const fetchHighscores = () => {
  return new Promise<Highscore[]>(async (resolve, reject) => {
    try {
      const highscores = await highscoresAPI.get('/get')
      resolve(highscores.data)
    } catch (error) {
      reject(error)
    }
  })
}

export const checkHighscore = (score: number): Promise<boolean> => {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const isHighscore: AxiosResponse<boolean> = await highscoresAPI.get(
        `/check?score=${score}`
      )
      resolve(isHighscore.data)
    } catch (error) {
      reject(error)
    }
  })
}
