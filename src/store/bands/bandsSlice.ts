import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { checkBand } from './bandsAPI'

export interface Band {
  name: string,
  imgUrl: string
}

export interface BandsState {
  status: 'idle' | 'checking' | 'failed'
  bands: Band[]
  used: string[]
  previous: string
  approved: boolean
}

const initialState: BandsState = {
  status: 'idle',
  bands: [],
  used: [],
  previous: 'a',
  approved: false
}

export const checkBandAsync = createAsyncThunk<Band, string>(
  'bands/checkBand',
   async bandName => {     
    const band = await checkBand(bandName)
    
    return band
  }
)

export const bandsSlice = createSlice({
  name: 'bands',
  initialState,
  reducers: {
    addBand: (state, action: PayloadAction<Band>) => {
      state.bands.push(action.payload)
    }
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(checkBandAsync.pending, state => {
        state.status = 'checking'
      })
      .addCase(checkBandAsync.fulfilled, (state, action: PayloadAction<Band>) => {
        state.approved = !!action.payload
        state.bands.push(action.payload)
        state.used.push(action.payload.name)
        state.status = 'idle'
      })
  }
})

export default bandsSlice.reducer



