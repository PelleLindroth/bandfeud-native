import React, { useContext } from 'react'
import { View } from 'react-native'
import { LogicContext } from '../../../../store/contexts/LogicContext/LogicContext'
import BandView from './components/BandView'
import GameOverLabel from './components/GameOverLabel'
import Feedback from './components/Feedback'
import styles from './styles'
import { UIContext } from '../../../../store/contexts/UIContext/UIContext'

const MainView = () => {
  const { game } = useContext(LogicContext)!
  const { currentBand, isTyping, showFeedback, currentFeedback } =
    useContext(UIContext)!

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
