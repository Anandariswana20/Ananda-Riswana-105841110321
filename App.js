import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputCostum = ({nama, color}) => {
  return (
    <TextInput
    placeholder={`Masukan ${nama}`}
    style={{
      height: 40,
      borderColor: color,
      borderWidth: 1,
      width: 200,
      padding: 10,
      margin: 10, // Proper margin value
    }}/>
  )
}

const App = () => {
  return (
    <View style={{    flex: 1,
      justifyContent: 'center',
      alignItems: 'center'}}>
     <InputCostum nama='email' color='pink'/>
     <InputCostum nama='email' color='pink'/>
     <InputCostum nama='email' color='pink'/>
    </View>
  )
}
export default App