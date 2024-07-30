import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './component/pages/signUp';
import Login from './component/pages/login';
import ForgotPassword from './component/pages/forgotPassword';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity style = {{ backgroundColor: 'blue', padding: 10, marginTop: 20}}
      onPress = {() => navigation.navigate(SignUp)}
      >
        <Text style = {{ color: 'white'}}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen nama ="Home" component={HomeScreen} />
      <Stack.Screen nama ="SignUp" component={SignUp} />
      <Stack.Screen nama = "Login" component = {Login} />
      <Stack.Screen nama ="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;