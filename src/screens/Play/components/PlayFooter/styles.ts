import { StyleSheet } from 'react-native'
import Color from '../../../constants/Color'
import * as Measure from '../../../constants/Measure'
import { FontSize } from '../../../constants/TypeScale'

export default StyleSheet.create({
  footer: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    left: 0,
    right: 0,
    position: 'absolute',
    marginBottom: 20,
  },
  previous: {
    color: Color.GOLD,
    fontSize: FontSize.X_LARGE,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  closeIcon: {
    height: Measure.ICON_SIDE,
    width: Measure.ICON_SIDE,
  },
})
