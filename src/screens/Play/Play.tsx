import React, { useContext, useEffect } from 'react'
import { LogicContext } from '../../store/contexts/LogicContext/LogicContext'
import { NavigationProps } from '../../constants/Props'
import BaseView from '../components/BaseView'
import MainView from './components/MainView'
import PlayFooter from './components/PlayFooter'
import TopLogo from './components/TopLogo'

export const Play = ({ navigation }: NavigationProps) => {
  const { startGame } = useContext(LogicContext)!

  useEffect(() => {
    startGame()
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
