import React, { useContext, useEffect } from 'react'
import { GameContext } from '../../store/contexts/GameContext'
import { NavigationProps } from '../../constants/Props'
import BaseView from '../../components/BaseView'
import MainView from './components/MainView'
import PlayFooter from './components/PlayFooter'
import TopLogo from './components/TopLogo'

export const Play = ({ navigation }: NavigationProps) => {
  const { handleStartGame } = useContext(GameContext)!

  useEffect(() => {
    handleStartGame()
  }, [])

  return (
    <BaseView>
      <TopLogo />
      <MainView />
      <PlayFooter navigation={navigation} />
    </BaseView>
  )
}

export default Play
