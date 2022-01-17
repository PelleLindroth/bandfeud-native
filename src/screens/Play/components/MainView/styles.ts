import { LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy'
import { StyleSheet } from 'react-native'
import Color from '../../../constants/Color'
import * as Measure from '../../../constants/Measure'
import { FontSize } from '../../../constants/TypeScale'

export default StyleSheet.create({
  mainView: {
    position: 'relative',
  },
  bandView: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  messageView: {
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 10,
    top: -50,
  },
  message: {
    color: Color.GOLD,
    fontSize: FontSize.X_LARGE,
    fontFamily: 'LuckiestGuy_400Regular',
  },
  gameOverWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: Measure.IMAGE_SIDE,
    justifyContent: 'center',
    width: Measure.IMAGE_SIDE,
  },
  gameOverImage: {
    height: Measure.IMAGE_SIDE * 0.5,
    width: Measure.IMAGE_SIDE * 0.9,
  },
})
