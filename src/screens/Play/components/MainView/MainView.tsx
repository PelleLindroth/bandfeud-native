import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { GameContext } from '../../../../store/contexts/GameContext'
import { Band } from '../../../../store/bandsSlice'
import BandView from './components/BandView'
import GameOverLabel from './components/GameOverLabel'
import Feedback from './components/Feedback'
import styles from './styles'

const MainView = () => {
  const { displayedBands, isTyping, showFeedback, currentFeedback } =
    useContext(GameContext)!
  const { game } = useContext(GameContext)!
  const [currentBand, setCurrentBand] = useState<Band | undefined>(undefined)

  useEffect(() => {
    setCurrentBand(displayedBands[displayedBands.length - 1])
  }, [displayedBands])

  return (
    <View style={styles.mainView}>
      {showFeedback && <Feedback message={currentFeedback} />}
      {game ? (
        <BandView currentBand={currentBand} isTyping={isTyping} />
      ) : (
        <GameOverLabel />
      )}
    </View>
  )
}

export default MainView
