import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import * as Measure from '../../../../constants/Measure'
import * as Device from '../../../../constants/Device'
import { MainViewProps } from './types'
import { Band } from '../../../../store/bandsSlice'
import BandCard from '../../../../components/BandCard'
import styles from '../../styles'

const MainView = (props: MainViewProps) => {
  const { bands, game, isTyping } = props
  const [currentBand, setCurrentBand] = useState<Band | undefined>(undefined)

  useEffect(() => {
    if (bands.length) {
      setCurrentBand(bands[bands.length - 1])
    }
  }, [bands])

  const GameOverLabel = () => (
    <View style={styles.gameOverWrapper}>
      <Image
        style={styles.gameOverImage}
        source={require('../../../../assets/game-over.png')}
      />
    </View>
  )

  return (
    <>
      {game ? (
        <View
          style={[
            styles.bandView,
            {
              marginBottom: isTyping
                ? Device.RUNS_ON_IOS
                  ? Measure.MAIN_VIEW_MARGIN_BOTTOM_IOS
                  : Measure.MAIN_VIEW_MARGIN_BOTTOM_ANDROID
                : 0,
            },
          ]}
        >
          {currentBand && (
            <BandCard key={currentBand.imgUrl} band={currentBand} />
          )}
        </View>
      ) : (
        <GameOverLabel />
      )}
    </>
  )
}

export default MainView
