import React, { useContext } from 'react'
import { View } from 'react-native'
import { LogicContext } from '../../../../store/contexts/LogicContext/LogicContext'
import BandView from './components/BandView'
import GameOverLabel from './components/GameOverLabel'
import Feedback from './components/Feedback'
import styles from './styles'

const MainView = () => {
  const { currentBand, game, isTyping, showFeedback, currentFeedback } =
    useContext(LogicContext)!

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
