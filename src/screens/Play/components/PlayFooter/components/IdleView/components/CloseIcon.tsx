import React, { useContext } from 'react'
import { Pressable, Image } from 'react-native'
import { NavigationProps } from '../../../../../../../constants/Props'
import { GameContext } from '../../../../../../../store/contexts/GameContext'
import styles from '../../../styles'

const CloseIcon = (props: NavigationProps) => {
  const { game } = useContext(GameContext)!

  return (
    <Pressable onPress={() => !game && props.navigation.navigate('Home')}>
      <Image
        style={styles.closeIcon}
        source={require('../../../../../../../assets/close-icon.png')}
      />
    </Pressable>
  )
}

export default CloseIcon
