import { createSlice } from '@reduxjs/toolkit'

export interface GameState {
  count: number
  score: number
  game: boolean
}

const initialState: GameState = {
  count: 20,
  score: 0,
  game: true,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state) {
      state.game = true
    },
    endGame(state) {
      state.game = false
      state.score = 0
      state.count = 20
    },
  },
})

export const { startGame, endGame } = gameSlice.actions
export default gameSlice.reducer
