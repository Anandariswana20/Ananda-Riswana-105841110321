import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Get window width

const VisualTakePhoto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search by taking a photo</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/satu.png')} 
          style={styles.image}
        />
      </View>
      <View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.cameraButton}>
          <MaterialIcons
            name="camera-alt"
            size={40} 
            color="#FFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Warna latar belakang yang lembut
    marginTop: 50,
  },
  header: {
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  headerText: {
    fontSize: 20, // Ukuran teks yang lebih besar
    fontWeight: '600',
    color: '#333', // Warna teks yang lebih tegas
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  image: { 
    width: width - 32,
    height: width * 1.5, 
    borderRadius: 20, // Menambahkan radius pada gambar untuk tampilan lebih lembut
    resizeMode: 'cover', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6, 
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  cameraButton: {
    width: 70, // Ukuran tombol yang sedikit lebih besar
    height: 70,
    borderRadius: 35, // Membulatkan tombol lebih sempurna
    backgroundColor: '#FF6363', // Warna yang lebih soft
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6, 
  },
});

export default VisualTakePhoto;
