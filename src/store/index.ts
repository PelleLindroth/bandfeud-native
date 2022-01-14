import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './gameSlice'
import highscoreReducer from './highscoreSlice'
import bandsReducer from './bandsSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    highscores: highscoreReducer,
    bands: bandsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
