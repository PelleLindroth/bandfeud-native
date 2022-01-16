import React, { useContext } from 'react'
import { View } from 'react-native'
import { GameContext } from '../../../../store/contexts/GameContext'
import BandView from './components/BandView'
import GameOverLabel from './components/GameOverLabel'
import Feedback from './components/Feedback'
import styles from './styles'

const MainView = () => {
  const { currentBand, game, isTyping, showFeedback, currentFeedback } =
    useContext(GameContext)!

  return (
    <View style={styles.mainView}>
      {showFeedback && <Feedback message={currentFeedback} />}
      {game ? (
        <BandView currentBand={currentBand!} isTyping={isTyping} />
      ) : (
        <GameOverLabel />
      )}
    </View>
  )
}

export default MainView
