import { StyleSheet } from "react-native"
import Color from "./Color"

export default StyleSheet.create({
  h1: {
    alignSelf: 'center',
    color: Color.gold,
    fontFamily: 'Righteous_400Regular',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 10,
    paddingLeft: 4,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  h2: {
    color: Color.offWhite,
    fontSize: 18, 
    fontFamily: 'Righteous_400Regular',
    marginBottom: 8,
    textTransform: 'uppercase'
  },
  p: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    marginBottom: 6,
    marginLeft: 5,
  },
  loading: {
    color: Color.offWhite,
    fontSize: 22,
    fontWeight: '700'
  }
})