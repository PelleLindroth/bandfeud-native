import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchHighscores } from "../api/highscoreAPI"
import { Band } from "./bandsSlice"

export interface Highscore {
  date: number,
  bands: Band[]
  _id: string,
  score: number,
  player: string
}

export interface HighscoreState {
  status: 'idle' | 'loading' | 'failed'
  data: Highscore[]
}

const initialState: HighscoreState = {
  status: 'idle',
  data: []
}

export const fetchHighscoresAsync = createAsyncThunk(
  'highscores/fetchHighscores',
  async () => {
    const highscores = await fetchHighscores() as Highscore[]
    
    return highscores
  }
)

export const highscoreSlice = createSlice({
  name: 'highscores',
  initialState,
  reducers: {
    updateHighscores: (state, action: PayloadAction<Highscore[]>) => {
      state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHighscoresAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchHighscoresAsync.fulfilled, (state, action : PayloadAction<Highscore[]>) => {
        state.status = 'idle'
        state.data = action.payload
      })
  }
})

export default highscoreSlice.reducer