import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { HighscoreBand } from '../store/highscores/highscoreSlice'
import TypeScale from '../constants/TypeScale'
import * as Measure from '../constants/Measure'

type Props = {
  band: HighscoreBand
}

const HighscoreBandCard = ({ band }: Props) => {
  return (
    <View style={styles.bandCard}>
    <View style={styles.imageWrapper}>
    {
      band.url ? (
        <Image style={styles.bandImage} source={{ uri: band.url }} />
      ) : (
        <Image style={styles.gameOverImage} source={require('../assets/game-over.png')} />
      )
    }

    </View>
    <Text style={TypeScale.h2}>{band.name}</Text>
    <Text style={TypeScale.p}>{band.mode ? band.mode : band.points ? `${band.points}p` : ''}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  bandCard: {
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 20
  },
  imageWrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 10,
    height: Measure.imageSide,
    justifyContent: 'center',
    marginBottom: 10,
    width: Measure.imageSide
  },
  gameOverImage: {
    height: 120,
    width: 180
  },
  bandImage: {
    borderRadius: 10,
    height: Measure.imageSide,
    resizeMode: 'cover',
    width: Measure.imageSide
  }
})

export default HighscoreBandCard