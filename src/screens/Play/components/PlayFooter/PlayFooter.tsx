import React, { useContext } from 'react'
import { GameContext } from '../../../../store/contexts/GameContext'
import { NavigationProps } from '../../../../constants/Props'
import ActiveView from './components/ActiveView'
import IdleView from './components/IdleView'

const PlayFooter = (props: NavigationProps) => {
  const { isTyping } = useContext(GameContext)!

  return isTyping ? <ActiveView /> : <IdleView navigation={props.navigation} />
}

export default PlayFooter
