import { NavigationScreenProp } from 'react-navigation'

export type StackProps = {
  navigation: NavigationScreenProp<any, any>
  route: {
    name: string
    params?: object
  }
}
