import React, { useContext } from 'react'
import { LogicContext } from '../../../../store/contexts/LogicContext/LogicContext'
import { NavigationProps } from '../../../constants/Props'
import ActiveView from './components/ActiveView'
import IdleView from './components/IdleView'

const PlayFooter = (props: NavigationProps) => {
  const { isTyping } = useContext(LogicContext)!

  return isTyping ? <ActiveView /> : <IdleView navigation={props.navigation} />
}

export default PlayFooter
