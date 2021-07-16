import React, { useState } from "react"
import { ListRenderItem } from "react-native"
import { Pressable, Text, FlatList, StyleSheet } from 'react-native'
import { useAppSelector } from '../../store/hooks'
import { Highscore } from './highscoreSlice'
import HighscoreModal from "./HighscoreModal"
import Color from "../../constants/Color"
import TypeScale from "../../constants/TypeScale"

type HighscoreListProps = {
  showHighscore: (highscore: Highscore) => void
}

const HighscoreList = (props: HighscoreListProps) => {
  const {data, status} = useAppSelector(state => state.highscores)
  // const [currentHighscore, setCurrentHighscore] = useState<Highscore | null>(null)
  const [modalVisible, setModalVisible] = useState(false)

  const renderItem: ListRenderItem<Highscore> = ({ item }) => (
    <Pressable onPress={() => props.showHighscore(item)} style={styles.row}>
      <Text style={[styles.column, styles.nameColumn]}>{item.player}</Text>
      <Text style={[styles.column, styles.scoreColumn]}>{item.score}</Text>
    </Pressable>
  )

  // const openModal = (id: string) => {
  //   const highscore = data.find(highscore => highscore._id === id)!
    
  //   setCurrentHighscore(highscore) 
  //   setModalVisible(true)
  // }

  return (
    <>
    {
      status === "loading" ? (
        <Text style={TypeScale.loading}>Loading...</Text>
      ) : (
        <>
        {/* {
          modalVisible && 
          <HighscoreModal 
          highscore={currentHighscore!} 
          setModalVisible={setModalVisible} 
          />   
        }    */}
        <Text style={TypeScale.h1}>Highscores</Text>
        <FlatList<Highscore>
            scrollEnabled={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            style={styles.list}
        />
        </>
      )
    }
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
    marginTop: 5
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
    paddingHorizontal: 30,
    width: '75%'
  },
  column: {
    color: Color.offWhite,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  nameColumn: {
    flexGrow: 1,
    textAlign: 'left',
    width: '50%'
  },
  scoreColumn: {
 flexGrow: 1,
    textAlign: 'right'
  }
})

export default HighscoreList