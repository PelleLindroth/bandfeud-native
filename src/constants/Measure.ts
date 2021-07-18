import { Dimensions } from 'react-native'

export const WINDOW_WIDTH = Dimensions.get("window").width
export const IMAGE_SIDE = WINDOW_WIDTH * 0.7
export const IMAGE_WITH_MARGIN_ = IMAGE_SIDE + 40
export const LIST_PADDING = WINDOW_WIDTH / 2 - IMAGE_SIDE / 2 - 20
export const ICON_SIDE = 40