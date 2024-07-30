import { Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import ButtonComponent from '../button/button'
import Inputan from '../TextInput/input'

const login = ({navigation}) => {
    return (
        <View style = {{
            flex: 1,
            backgroundColor: '#EEEEEE',
            paddingHorizontal: 30,
            paddingTop: 100
        }}>
           
           <View style = {{
            marginBottom: 60
           }}>
            <Text style = {{
                fontWeight: 'bold',
                fontSize: 50
            }}>
                Login
            </Text>
           </View>

           <View style = {{
            marginBottom: 10
           }}>
            <Inputan nama="Email" color = "black" />
            <Inputan nama="Passowrd" color = "black" />

            <TouchableOpacity onPress={ () => navigation.navigate('ForgotPassword')}>
                <Text style = {{
                    fontSize: 14,
                    color: 'black',
                    marginBottom: 50,
                    textAlign: 'right'
                }}>
                    Forgot your Password?
                </Text>
            </TouchableOpacity>
           </View>
           <ButtonComponent title= "LOGIN" color = "red" />
           <Text style = {{
            fontSize: 14,
            color: 'black',
            textAlign: 'center',
            marginTop: 90,
            marginBottom: 20
           }}>
            Or login with social account
           </Text>

           <View style = {{
            flexDirection: 'row',
            justifyContent: 'center',
           }}>
            <TouchableOpacity style = {{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignContent: 'center',
                borderRadius: 10,
                width: 92,
                height: 64,
                marginHorizontal: 10,
            }}>
                <Image
                source = {require('../../assets/google.png')}
                    style = {{width: 50, height: 50}}
                />
            </TouchableOpacity>
            <TouchableOpacity style = {{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                width: 92,
                height: 64,
                marginHorizontal: 10,
            }}>
                <Image
                source={require('../../assets/facebook.png')}
                style = {{width: 50, height: 50}}
                />
            </TouchableOpacity>
           </View>
           </View>
    )
}
                