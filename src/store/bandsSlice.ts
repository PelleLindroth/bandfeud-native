import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { checkBand, getBand, GetBandPayload } from '../api/bandsAPI'

export interface Band {
  name: string,
  url?: string,
  imgUrl?: string
  discogsId?: number,
  id?: number, 
  points?: Number, 
  mode?: string
}

export interface BandsState {
  status: 'idle' | 'fetching' | 'failed'
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

export const getBandAsync = createAsyncThunk(
  'bands/getBand',
  async (payload: GetBandPayload) => {
    try {
      const band = await getBand(payload)

      return band
      
    } catch (error) {
      console.log(error)
      return null 
    }
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
        state.status = 'fetching'
      })
      .addCase(checkBandAsync.fulfilled, (state, action: PayloadAction<Band>) => {
        state.approved = !!action.payload
        state.bands.push(action.payload)
        state.used.push(action.payload.name)
        state.status = 'idle'
      })
      .addCase(getBandAsync.pending, state => {
        state.status = 'fetching'
      })
      .addCase(getBandAsync.fulfilled, (state, action: PayloadAction<Band | null>) => {
        if (action.payload) {
          state.bands.push(action.payload)
          state.used.push(action.payload.name)
        }
        state.status = 'idle'
      })  
  }
})

export default bandsSlice.reducer



