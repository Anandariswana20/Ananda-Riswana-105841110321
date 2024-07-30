import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './component/pages/SignUp';  
import Login from './component/pages/Login';    
import ForgotPassword from './component/pages/forgotPassword'; 
import MainPage from './component/pages/mainPage';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="mainPage" component={MainPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;