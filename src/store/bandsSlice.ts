import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetBandPayload } from '../api/types'
import { checkBand, getBand } from '../api/bandsAPI'
import { getInitPrevious } from './utils'

export interface Band {
  name: string
  url?: string
  imgUrl?: string
  discogsId?: number
  id?: number
  points?: Number
  mode?: string
}

export interface BandsState {
  status: 'idle' | 'fetching' | 'failed'
  bands: Band[]
  used: string[]
  previous: string | undefined
  approved: boolean
}

const initialState: BandsState = {
  status: 'idle',
  bands: [],
  used: [],
  previous: undefined,
  approved: false,
}

export const checkBandAsync = createAsyncThunk(
  'bands/checkBand',
  async (bandName: string) => {
    try {
      const band = await checkBand(bandName)
      if (band) {
        return band
      } else {
        throw 'not found'
      }
    } catch (error) {
      throw 'not found'
    }
  }
)

export const getBandAsync = createAsyncThunk(
  'bands/getBand',
  async (payload: GetBandPayload) => {
    try {
      const band = await getBand(payload)
      return band
    } catch (error) {
      return null
    }
  }
)

export const bandsSlice = createSlice({
  name: 'bands',
  initialState,
  reducers: {
    clear: () => initialState,
    initPrevious: (state) => {
      state.previous = getInitPrevious()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkBandAsync.pending, (state) => {
        state.status = 'fetching'
      })
      .addCase(
        checkBandAsync.fulfilled,
        (state, action: PayloadAction<Band | null>) => {
          if (action.payload) {
            state.previous = action.payload.name.slice(-1)
            state.approved = true
            state.bands.push(action.payload)
            state.used.push(action.payload.name)
          }
          state.status = 'idle'
        }
      )
      .addCase(checkBandAsync.rejected, (state, action) => {
        state.used.push(action.meta.arg)
        state.approved = false
      })
      .addCase(getBandAsync.pending, (state) => {
        state.status = 'fetching'
      })
      .addCase(
        getBandAsync.fulfilled,
        (state, action: PayloadAction<Band | null>) => {
          if (action.payload) {
            state.bands.push(action.payload)
            state.used.push(action.payload.name)
            state.previous = action.payload.name.slice(-1)
          }

          state.status = 'idle'
        }
      )
  },
})

export const { clear, initPrevious } = bandsSlice.actions
export default bandsSlice.reducer
