import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import Previous from '../Previous'
import InputField from './components/InputField'
import styles from '../../styles'

const ActiveView = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.footer}
    >
      <Previous />
      <InputField />
    </KeyboardAvoidingView>
  )
}

export default ActiveView
