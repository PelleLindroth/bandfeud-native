import { configureStore } from "@reduxjs/toolkit"
import highscoreReducer from './highscores/highscoreSlice'
import bandsReducer from './bands/bandsSlice'

export const store = configureStore({
  reducer: {
    highscores: highscoreReducer,
    bands: bandsReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>