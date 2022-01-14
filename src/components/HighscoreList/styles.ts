import { StyleSheet } from 'react-native'
import Color from '../../constants/Color'

export default StyleSheet.create({
  list: {
    flexGrow: 0,
    marginTop: 5
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
    paddingHorizontal: 30,
    width: '75%'
  },
  column: {
    color: Color.OFF_WHITE,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  nameColumn: {
    flexGrow: 1,
    textAlign: 'left',
    width: '50%'
  },
  scoreColumn: {
 flexGrow: 1,
    textAlign: 'right'
  }
})