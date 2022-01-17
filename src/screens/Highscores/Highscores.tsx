import React from 'react'
import BaseView from '../components/BaseView'
import LogoSquare from '../components/LogoSquare'
import HighscoreList from './components/HighscoreList'
import { StackProps } from './types'
import { Highscore } from '../../store/highscoreSlice'

const Highscores = ({ navigation }: StackProps) => {
  const handleShowHighscore = (highscore: Highscore) => {
    navigation.navigate('Single Highscore', { highscore })
  }

  return (
    <BaseView>
      <LogoSquare />
      <HighscoreList showHighscore={handleShowHighscore} />
    </BaseView>
  )
}

export default Highscores
