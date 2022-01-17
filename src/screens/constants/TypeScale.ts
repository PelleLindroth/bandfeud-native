import { StyleSheet } from 'react-native'
import Color from './Color'

export default StyleSheet.create({
  h1: {
    alignSelf: 'center',
    color: Color.GOLD,
    fontFamily: 'Righteous_400Regular',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 10,
    paddingLeft: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  h2: {
    color: Color.OFF_WHITE,
    fontSize: 18,
    fontFamily: 'Righteous_400Regular',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  p: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    marginBottom: 6,
    marginLeft: 5,
  },
  loading: {
    color: Color.OFF_WHITE,
    fontSize: 22,
    fontWeight: '700',
  },
})

export enum FontSize {
  X_SMALL = 8,
  SMALL = 12,
  MEDIUM = 14,
  LARGE = 18,
  X_LARGE = 20,
}
