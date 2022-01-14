import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FontSize } from '../../../../constants/TypeScale'
import { InputFieldProps, WordLength } from './types'
import styles from './styles'

const InputField = (props: InputFieldProps) => {
  const { inputText, setInputText, handleCheckBand } = props

  return (
    <TextInput
      autoFocus
      autoCorrect={false}
      autoCompleteType="off"
      importantForAutofill="no"
      keyboardAppearance="dark"
      value={inputText}
      onChangeText={(text) => setInputText(text)}
      onSubmitEditing={handleCheckBand}
      style={[
        styles.input,
        {
          fontSize:
            inputText.length < WordLength.NORMAL
              ? FontSize.X_LARGE
              : inputText.length > WordLength.LONG
              ? FontSize.SMALL
              : FontSize.MEDIUM,
        },
      ]}
      autoCapitalize="characters"
    />
  )
}

export default InputField
