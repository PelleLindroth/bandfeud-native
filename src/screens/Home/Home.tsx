import React from 'react'
import { Pressable, Image } from 'react-native'
import { NavigationProps } from '../constants/Props'
import BaseView from '../components/BaseView'
import styles from './styles'

const Home = ({ navigation }: NavigationProps) => (
  <BaseView>
    <Image
      style={styles.logo}
      source={require('../../assets/bandfeud-logo-square.png')}
    />
    <Pressable onPress={() => navigation.navigate('Play')}>
      <Image
        style={styles.playIcon}
        source={require('../../assets/play-icon.png')}
      />
    </Pressable>
  </BaseView>
)

export default Home
