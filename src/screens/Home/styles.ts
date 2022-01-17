import { StyleSheet } from 'react-native'
import * as Measure from '../constants/Measure'

export default StyleSheet.create({
  logo: {
    height: Measure.WINDOW_WIDTH * 0.5,
    width: Measure.WINDOW_WIDTH * 0.7,
    marginBottom: 20,
  },
  playIcon: {
    height: Measure.ICON_SIDE,
    width: Measure.ICON_SIDE,
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
  },
})
