import React from 'react'
import { ListRenderItem } from 'react-native'
import { Pressable, Text, FlatList } from 'react-native'
import { useAppSelector } from '../../../../store/hooks'
import { Highscore } from '../../../../store/highscoreSlice'
import TypeScale from '../../../../constants/TypeScale'
import styles from './styles'

type HighscoreListProps = {
  showHighscore: (highscore: Highscore) => void
}

const HighscoreList = (props: HighscoreListProps) => {
  const { highscores, status } = useAppSelector((state) => state.highscores)

  const renderItem: ListRenderItem<Highscore> = ({ item }) => (
    <Pressable onPress={() => props.showHighscore(item)} style={styles.row}>
      <Text style={[styles.column, styles.nameColumn]}>{item.player}</Text>
      <Text style={[styles.column, styles.scoreColumn]}>{item.score}</Text>
    </Pressable>
  )

  return (
    <>
      {status === 'loading' ? (
        <Text style={TypeScale.loading}>Loading...</Text>
      ) : (
        <>
          <Text style={TypeScale.h1}>Highscores</Text>
          <FlatList<Highscore>
            scrollEnabled={false}
            data={highscores}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            style={styles.list}
          />
        </>
      )}
    </>
  )
}

export default HighscoreList
