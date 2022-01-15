import React, { useContext } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FontSize } from '../../../../../../../../constants/TypeScale'
import { WordLength } from '../../../../../../../../constants/Measure'
import styles from './styles'
import { GameContext } from '../../../../../../../../store/contexts/GameContext'

const InputField = () => {
  const { inputText, setInputText, handleCheckBand } = useContext(GameContext)!

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
