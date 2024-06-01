import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000', // To blend with the background image
    }}>
      <Image
        source={require('./assets/shooping.jpg')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0.5,
          zIndex: -1,
        }}
        resizeMode="cover"
      />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
        <Image 
          source={require('./assets/LogoNs.jpg')} 
          style={{
            width: 100,
            height: 100,
            marginTop: 50,
            marginRight: 150,
            opacity: 1,
            zIndex: 1,
            borderRadius: 100,
          }}
        />
        <Text style={{
          color: 'white',
          fontSize: 28,
          fontWeight: '300',
          textAlign: 'center',
          marginTop: 20,
          fontWeight: 'bold'
        }}>
          Welcome To MyNs (Nndshoop) 
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 15,
          textAlign: 'center',
          marginTop: 20,
        }}>
          Untuk gadis-gadisku yang tersayang🌷shooping merupakan suatu hal yang populer dan sudah menjadi bagian dari hidup seorang wanita. Kali ini kami hadir untuk untuk membuat kalian semua tidak repot lagi dalam hal mencari barang-barang yang akan menjadi incaran gadis-gadis yang lain ceunahhhh🌷🛍.
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 15,
          textAlign: 'center',
          marginTop: 20,
        }}>
          Kami hadir dengan kualitas yang terbaik, ori, tercepat, dan 100% barang-barang kami limitid edition ceunahh🌷🛍
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 15,
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
          fontWeight : 'bold'
        }}>
           "Cerita horor terpendek yang pernah ada: sold out💳💸"
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
        }}>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{
              width: 100,
              height: 50,
              color: 'white',
              backgroundColor: '#007bff',
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 20,
              borderRadius: 10,
            }}>Login</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{
              width: 100,
              height: 50,
              color: 'white',
              backgroundColor: '#28a745', 
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 20,
              borderRadius: 10,
            }}>Register</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;