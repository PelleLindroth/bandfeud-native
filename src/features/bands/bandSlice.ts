import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Band {
  id: number,
  name: string,
  url: string,
  points?: number,
  mode?: string
}