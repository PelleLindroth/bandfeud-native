import React, { useContext } from 'react'
import { UIContext } from '../../../../store/contexts/UIContext/UIContext'
import { NavigationProps } from '../../../constants/Props'
import ActiveView from './components/ActiveView'
import IdleView from './components/IdleView'

const PlayFooter = (props: NavigationProps) => {
  const { isTyping } = useContext(UIContext)!

  return isTyping ? <ActiveView /> : <IdleView navigation={props.navigation} />
}

export default PlayFooter
