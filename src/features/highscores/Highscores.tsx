import React, { FC } from "react"
import {NavigationScreenProp} from 'react-navigation'
import BaseView from '../../constants/BaseView'
import LogoSquare from "../../components/LogoSquare"
import HighscoreList from './HighscoreList'
import { Highscore } from './highscoreSlice'

type StackProps = {
  navigation: NavigationScreenProp<any,any>
}

const Highscores = (props: StackProps ) => {
  const handleShowHighscore = (highscore: Highscore) => {
    props.navigation.navigate('Single Highscore', {highscore : highscore })
  }

  return (
    <BaseView>
      <LogoSquare />
      <HighscoreList  showHighscore={handleShowHighscore}/>
    </BaseView>
  )
}

export default Highscores