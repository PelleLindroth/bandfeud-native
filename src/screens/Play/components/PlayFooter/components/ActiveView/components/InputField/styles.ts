import { StyleSheet } from 'react-native'
import Color from '../../../../../../../constants/Color'
import * as Measure from '../../../../../../../constants/Measure'
import * as Device from '../../../../../../../constants/Device'

const styles = StyleSheet.create({
  input: {
    color: Color.OFF_WHITE,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: Device.RUNS_ON_IOS ? 5 : 0,
    textAlign: 'center',
    width: Measure.WINDOW_WIDTH - 40,
  },
})

export default styles
