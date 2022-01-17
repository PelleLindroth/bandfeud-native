import React, { PureComponent } from 'react'
import { View, Image, Text } from 'react-native'
import { Band } from '../../../store/bandsSlice'
import TypeScale from '../../../constants/TypeScale'
import styles from './styles'

type Props = {
  band: Band
}

class BandCard extends PureComponent<Props> {
  render() {
    const { band } = this.props

    return (
      <View style={styles.bandCard}>
        <View style={styles.imageWrapper}>
          {band.url ? (
            <Image style={styles.bandImage} source={{ uri: band.url }} />
          ) : (
            <Image
              style={styles.gameOverImage}
              source={require('../../../assets/game-over.png')}
            />
          )}
        </View>
        <Text style={[styles.bandTitle, TypeScale.h2]}>{band.name}</Text>
        <Text style={TypeScale.p}>
          {band.mode ? band.mode : band.points ? `${band.points}p` : ''}
        </Text>
      </View>
    )
  }
}

export default BandCard
