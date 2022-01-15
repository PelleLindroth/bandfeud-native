import { Dimensions } from 'react-native'

export const WINDOW_HEIGHT = Dimensions.get('window').height
export const WINDOW_WIDTH = Dimensions.get('window').width

export const IS_LARGE_SCREEN = WINDOW_HEIGHT > 800
export const IS_SMALL_SCREEN = WINDOW_HEIGHT < 700

export const IMAGE_SIDE = IS_LARGE_SCREEN
  ? WINDOW_WIDTH * 0.8
  : WINDOW_WIDTH * 0.6
export const IMAGE_WIDTH = IS_LARGE_SCREEN ? IMAGE_SIDE : IMAGE_SIDE + 60

export const ICON_SIDE = 40

export const LOGO_TOP = IS_LARGE_SCREEN ? 50 : 35
export const LOGO_HEIGHT = IS_LARGE_SCREEN || IS_SMALL_SCREEN ? 32 : 40
export const LOGO_WIDTH =
  IS_LARGE_SCREEN || IS_SMALL_SCREEN ? WINDOW_WIDTH - 170 : WINDOW_WIDTH - 160

export const LIST_PADDING =
  WINDOW_WIDTH / 2 -
  IMAGE_SIDE / 2 -
  (IS_LARGE_SCREEN ? 20 : IS_SMALL_SCREEN ? 50 : 40)

export const MAIN_VIEW_MARGIN_BOTTOM_ANDROID = 60
export const MAIN_VIEW_MARGIN_BOTTOM_IOS =
  WINDOW_HEIGHT < 700 ? IMAGE_SIDE - 20 : IMAGE_SIDE - 75

export enum WordLength {
  NORMAL = 28,
  LONG = 32,
  REALLY_LONG = 40,
  TOO_LONG = 50,
}
