import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { checkHighscore, fetchHighscores } from '../api/highscoreAPI'
import { Band } from './bandsSlice'

export interface Highscore {
  date: number
  bands: Band[]
  _id: string
  score: number
  player: string
}

export interface HighscoreState {
  status: 'idle' | 'loading' | 'failed'
  highscores: Highscore[]
  playerHasHighscore: boolean
}

const initialState: HighscoreState = {
  status: 'idle',
  highscores: [],
  playerHasHighscore: false,
}

export const fetchHighscoresAsync = createAsyncThunk(
  'highscores/fetchHighscores',
  async () => {
    const highscores = (await fetchHighscores()) as Highscore[]

    return highscores
  }
)

export const checkHighscoreAsync = createAsyncThunk(
  'highscores/checkHighscore',
  async (score: number) => {
    try {
      const isHighscore: AxiosResponse<boolean> = await checkHighscore(score)

      return isHighscore
    } catch (error) {
      throw new Error('Unable to connect to database')
    }
  }
)

export const highscoreSlice = createSlice({
  name: 'highscores',
  initialState,
  reducers: {
    resetPlayerHasHighscore: (state) => {
      state.playerHasHighscore = false
    },
    updateHighscores: (state, action: PayloadAction<Highscore[]>) => {
      state.highscores = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHighscoresAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchHighscoresAsync.fulfilled,
        (state, action: PayloadAction<Highscore[]>) => {
          state.status = 'idle'
          state.highscores = action.payload
        }
      )
      .addCase(
        checkHighscoreAsync.fulfilled,
        (state, action: PayloadAction<AxiosResponse<boolean>>) => {
          state.playerHasHighscore = action.payload.data
        }
      )
  },
})

export const { resetPlayerHasHighscore } = highscoreSlice.actions
export default highscoreSlice.reducer
