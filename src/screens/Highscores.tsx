import React from "react"
import { NavigationScreenProp } from 'react-navigation'
import BaseView from '../components/BaseView'
import LogoSquare from "../components/LogoSquare"
import HighscoreList from '../components/HighscoreList'
import { Highscore } from '../store/highscores/highscoreSlice'

type StackProps = {
  navigation: NavigationScreenProp<any,any>
}

const Highscores = (props: StackProps ) => {
  const handleShowHighscore = (highscore: Highscore) => {
    props.navigation.navigate('Single Highscore',  { highscore })
  }

  return (
    <BaseView>
      <LogoSquare />
      <HighscoreList  showHighscore={handleShowHighscore}/>
    </BaseView>
  )
}

export default Highscores