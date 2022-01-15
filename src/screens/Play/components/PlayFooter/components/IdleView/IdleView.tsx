import React, { useContext } from 'react'
import { View } from 'react-native'
import { GameContext } from '../../../../../../store/contexts/GameContext'
import { NavigationProps } from '../../../../../../constants/Props'
import Previous from '../Previous'
import styles from '../../styles'
import StatusMessage from './components/StatusMessage'
import CloseIcon from './components/CloseIcon'

const IdleView = (props: NavigationProps) => {
  const { game } = useContext(GameContext)!

  return (
    <View style={styles.footer}>
      <Previous />
      {game ? <StatusMessage /> : <CloseIcon navigation={props.navigation} />}
    </View>
  )
}

export default IdleView
