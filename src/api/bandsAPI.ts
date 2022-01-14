import axios, { AxiosResponse } from 'axios'
import { Band } from '../store/bandsSlice'
import { GetBandPayload } from './types'

const bandsAPI = axios.create({
  baseURL: 'https://bandfeud-api.herokuapp.com/api/bands',
})

export const checkBand = (bandName: string) => {
  return new Promise<Band>(async (resolve, reject) => {
    try {
      const response: AxiosResponse<Band> = await bandsAPI.post(
        `/check?name=${encodeURIComponent(bandName.toLowerCase())}`
      )
      const band: Band = { ...response.data, url: response.data.imgUrl }

      resolve(band)
    } catch (err) {
      reject(err)
    }
  })
}

export const getBand = (payload: GetBandPayload) => {
  return new Promise<Band>(async (resolve, reject) => {
    try {
      const response: AxiosResponse<Band> = await bandsAPI.post('/get', payload)
      const band: Band = { ...response.data, url: response.data.imgUrl }

      resolve(band)
    } catch (err) {
      reject(err)
    }
  })
}
