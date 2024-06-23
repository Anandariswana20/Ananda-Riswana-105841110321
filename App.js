import { Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const App = () => {
  const Inputan = ({ nama, color })=>{
    return(
      <TextInput
      placeholder={`Masukan ${nama}`}
      style ={{
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 10,
        width: 300,
        height: 50,
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'white',
        color:color,
      }}
      />
    )
  }
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Inputan nama= "Email" color = "pink"/>
      <Inputan nama= "Username" color = "pink"/>
      <Inputan nama= "Password" color = "pink"/>
    </View>
  )
}
export default App;