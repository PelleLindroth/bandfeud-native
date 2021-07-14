import React from 'react'
import { 
  Dimensions,
  SafeAreaView, 
  ListRenderItem, 
  View, 
  Image,
  FlatList, 
  Pressable, 
  Text, 
  StyleSheet 
} from 'react-native'
import { Highscore, HighscoreBand } from './highscoreSlice'
import Color from '../../constants/Color'
import TypeScale from '../../constants/TypeScale'

const windowWidth = Dimensions.get("window").width
const imageSide = windowWidth * 0.7
const listPadding = windowWidth / 2 - imageSide / 2 - 20

type HighscoreProps = {
  highscore: Highscore,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const HighscoreModal = (props: HighscoreProps ) => {  
  const onCloseHandler = () => {
    props.setModalVisible(false)
  }

  const renderItem: ListRenderItem<HighscoreBand> = ({ item }) => (
    <View style={styles.bandCard}>
      <View style={styles.imageWrapper}>
      {
        item.url ? (
          <Image style={styles.bandImage} source={{uri: item.url}} />
        ) : (
          <Image style={styles.gameOverImage} source={require('../../assets/gameOver.png')} />
        )
      }

      </View>
      <Text style={TypeScale.h2}>{item.name}</Text>
      <Text style={TypeScale.p}>{item.mode ? item.mode : item.points ? `${item.points}p` : ''}</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.modalWrapper}>
      <View style={styles.modalHeader}>
        <Text style={[TypeScale.p, styles.info]}>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(props.highscore.date)}</Text>
        <Text style={[TypeScale.h1, styles.name]}>{props.highscore.player}</Text>
        <Text style={[TypeScale.p, styles.info]}>{`${props.highscore.bands.length} BANDS`}</Text>
      </View>
      <Text style={styles.totalScore}>{props.highscore.score}p</Text>
      <FlatList<HighscoreBand>
        data={props.highscore.bands}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id?.toString() || item.name}
        contentContainerStyle={styles.bandList}
        showsHorizontalScrollIndicator={false}
        />
      <Pressable onPress={onCloseHandler}>
      <Image style={styles.closeIcon} source={require('../../assets/close-icon.png')} />
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: Color.offBlack,
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  modalHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,
    margin: 'auto'
  },
  name: {
    flex: 2
  },
  info: {
    fontSize: 12,
    flex: 1,
    textAlign: 'center'
  },
  totalScore: {
    color: Color.gold
  },
  bandList: { 
    alignItems: 'center',
    paddingHorizontal: listPadding
  },
  bandCard: {
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 20
  },
  imageWrapper: {
    alignItems: 'center',
    borderRadius: 10,
    height: imageSide,
    justifyContent: 'center',
    marginBottom: 10,
    width: imageSide
  },
  gameOverImage: {
    height: 100,
    width: 150
  },
  bandImage: {
    borderRadius: 10,
    height: imageSide,
    marginBottom: 10,
    resizeMode: 'cover',
    width: imageSide
  },
  closeIcon: {
    height: 25,
    width: 25,
    marginVertical: 10
  }
})

export default HighscoreModal