import { StyleSheet } from 'react-native'
import * as Measure from '../../constants/Measure'

export default StyleSheet.create({
  bandCard: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  bandTitle: {
    maxWidth: Measure.IMAGE_WIDTH - 40,
    textAlign: 'center',
  },
  imageWrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 10,
    height: Measure.IMAGE_SIDE,
    justifyContent: 'center',
    marginBottom: 10,
    width: Measure.IMAGE_WIDTH,
  },
  gameOverImage: {
    height: 120,
    width: 180,
  },
  bandImage: {
    borderRadius: 10,
    height: Measure.IMAGE_SIDE,
    resizeMode: 'cover',
    width: Measure.IMAGE_WIDTH,
  },
})
