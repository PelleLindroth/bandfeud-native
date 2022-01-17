import React from 'react'
import { View } from 'react-native'
import BandCard from '../../../../components/BandCard'
import * as Measure from '../../../../../constants/Measure'
import * as Device from '../../../../../constants/Device'
import { BandViewTypes } from '../types'
import styles from '../styles'

const BandView = (props: BandViewTypes) => {
  const { currentBand, isTyping } = props

  return (
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
      {currentBand && <BandCard key={currentBand.imgUrl} band={currentBand} />}
    </View>
  )
}

export default BandView
