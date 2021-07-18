import axios from 'axios'
import { Band } from '../store/bandsSlice'

const bandsAPI = axios.create({
  baseURL: 'https://bandfeud-api.herokuapp.com/api/bands'
});

export type GetBandPayload = {
  used: string[],
  previous: string
}

export const checkBand = (bandName: string) => {  
  return new Promise<Band>(async (resolve, reject) => {
    try {
      const band = await bandsAPI.post(`/check?name=${encodeURI(bandName.toLowerCase())}`)
      
      resolve(band.data)
    } catch(err) {   
         
      reject(err)
    }
  }
  )
}

export const getBand = (payload: GetBandPayload) => {  
  return new Promise<Band>(async (resolve, reject) => {
    try {
      const band = await bandsAPI.post('/get', payload)
      
      resolve(band.data)
    } catch (err) {      
      reject(err)
    }
  })
}