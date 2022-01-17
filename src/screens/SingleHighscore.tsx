import React from 'react'
import {
  SafeAreaView,
  ListRenderItem,
  FlatList,
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  Platform,
} from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { Highscore } from '../store/highscoreSlice'
import { Band } from '../store/bandsSlice'
import BandCard from './components/BandCard'
import Color from '../constants/Color'
import TypeScale from '../constants/TypeScale'
import * as Measure from '../constants/Measure'

type Props = {
  route: {
    params: {
      highscore: Highscore
    }
  }
  navigation: NavigationScreenProp<any, any>
}

const SingleHighscore = ({ route, navigation }: Props) => {
  const renderItem: ListRenderItem<Band> = ({ item }) => (
    <BandCard band={item} />
  )

  return (
    <SafeAreaView style={styles.wrapper}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          style={styles.backIcon}
          source={
            Platform.OS === 'ios'
              ? require('../assets/back-icon.png')
              : require('../assets/close-icon.png')
          }
        />
      </Pressable>
      <View style={styles.header}>
        <Text style={[TypeScale.p, styles.info]}>
          {new Date(route.params.highscore.date)
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, '/')}
        </Text>
        <Text style={[TypeScale.h1, styles.name]}>
          {route.params.highscore.player}
        </Text>
        <Text
          style={[TypeScale.p, styles.info]}
        >{`${route.params.highscore.bands.length} BANDS`}</Text>
      </View>
      <Text style={styles.totalScore}>{route.params.highscore.score}p</Text>
      <FlatList<Band>
        data={route.params.highscore.bands}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id?.toString() || item.name}
        contentContainerStyle={styles.bandList}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: Color.OFF_BLACK,
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
    margin: 'auto',
  },
  backButton: {
    marginTop: 10,
  },
  backIcon: {
    height: 30,
    width: 30,
  },
  name: {
    flex: 2,
  },
  info: {
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
  },
  totalScore: {
    color: Color.GOLD,
  },
  bandList: {
    alignItems: 'center',
    paddingHorizontal: Measure.LIST_PADDING,
  },
})

export default SingleHighscore
