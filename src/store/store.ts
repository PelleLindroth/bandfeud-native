import { configureStore } from "@reduxjs/toolkit"
import highscoreReducer from '../features/highscores/highscoreSlice'

export const store = configureStore({
  reducer: {
    highscores: highscoreReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>