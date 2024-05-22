import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import { Colors } from 'react-native/Libraries/NewAppScreen'
const App = () => {
  return (
  <View style={{flex:1}}>
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: 'green' }}></View>
      <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
    </View>
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1, backgroundColor: 'red' }}></View>
      <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
    </View>
    </View>
  
  )
}
export default App