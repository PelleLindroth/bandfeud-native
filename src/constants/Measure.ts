import { Dimensions } from 'react-native'

export const windowWidth = Dimensions.get("window").width
export const imageSide = windowWidth * 0.7
export const listPadding = windowWidth / 2 - imageSide / 2 - 20
export const iconSide = 40