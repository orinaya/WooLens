import { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { formComponentInputStyle as styles } from './FormComponentStyle'

function FormInputComponent () {
  const [text, setText] = useState('')
  return (
    <TouchableOpacity>
      <TextInput
        style={styles.input}
        label='Nom du produit'
        value={text}
        onChangeText={text => setText(text)}
      />
    </TouchableOpacity>
  )
}

export default FormInputComponent
