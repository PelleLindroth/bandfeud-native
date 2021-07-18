import axios from 'axios'
import { Band } from '../store/bandsSlice'

export const checkBand = (bandName: string) => {  
  return new Promise<Band>(async (resolve, reject) => {
    try {
      const band = await axios.post(`https://bandfeud-api.herokuapp.com/api/bands/check?name=${encodeURI(bandName.toLowerCase())}`)

      resolve(band.data)
    } catch(err) {      
      reject(err)
    }
  }
  )
}