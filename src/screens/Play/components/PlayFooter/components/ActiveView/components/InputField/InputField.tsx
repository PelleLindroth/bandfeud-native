import React, { useContext } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FontSize } from '../../../../../../../../constants/TypeScale'
import { WordLength } from '../../../../../../../../constants/Measure'
import styles from './styles'
import { LogicContext } from '../../../../../../../../store/contexts/LogicContext/LogicContext'

const InputField = () => {
  const { inputText, setInputText, checkBand } = useContext(LogicContext)!

  return (
    <TextInput
      autoFocus
      autoCorrect={false}
      autoCompleteType="off"
      importantForAutofill="no"
      keyboardAppearance="dark"
      value={inputText}
      onChangeText={(text) => setInputText(text.toUpperCase())}
      onSubmitEditing={checkBand}
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
    />
  )
}

export default InputField
