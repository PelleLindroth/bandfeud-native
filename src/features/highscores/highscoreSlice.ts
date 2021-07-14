import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchHighscores } from "./highscoreAPI"

export interface Highscore {
  date: number,
  bands: HighscoreBand[]
  _id: string,
  score: number,
  player: string
}

export interface HighscoreBand {
  name: string, 
  url?: string, 
  id?: number, 
  points?: Number, 
  mode?: string
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
    const highscores = await fetchHighscores() as {data: Highscore[]}

    return highscores.data
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