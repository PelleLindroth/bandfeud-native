import React, { useContext } from 'react'
import { Pressable, Image } from 'react-native'
import { NavigationProps } from '../../../../../../constants/Props'
import { LogicContext } from '../../../../../../../store/contexts/LogicContext/LogicContext'
import styles from '../../../styles'

const CloseIcon = (props: NavigationProps) => {
  const { game } = useContext(LogicContext)!

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
