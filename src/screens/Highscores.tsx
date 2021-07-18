import React from "react"
import { NavigationScreenProp } from 'react-navigation'
import BaseView from '../components/BaseView'
import LogoSquare from "../components/LogoSquare"
import HighscoreList from '../components/HighscoreList'
import { Highscore } from '../store/highscoreSlice'

type StackProps = {
  navigation: NavigationScreenProp<any,any>,
  route: {
    name: string
    params?: object
  }
}

const Highscores = ({navigation, route}: StackProps ) => {
  const handleShowHighscore = (highscore: Highscore) => {
    navigation.navigate('Single Highscore',  { highscore })
  }

  return (
    <BaseView>
      <LogoSquare />
      <HighscoreList  showHighscore={handleShowHighscore}/>
    </BaseView>
  )
}

export default Highscores