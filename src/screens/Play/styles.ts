import { StyleSheet } from 'react-native'
import * as Measure from '../constants/Measure'

export default StyleSheet.create({
  logo: {
    height: Measure.LOGO_HEIGHT,
    width: Measure.LOGO_WIDTH,
    top: Measure.LOGO_TOP,
    position: 'absolute',
  },
  icon: {
    height: Measure.ICON_SIDE,
    width: Measure.ICON_SIDE,
  },
})
