import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Mengimpor gambar latar belakang dari folder lokal
import backgroundImage from './assets/dua.png'; // Sesuaikan path dengan lokasi gambar Anda

const VisualSearch = () => {
  return (
    <ImageBackground 
      source={backgroundImage} // Menggunakan gambar yang diimpor
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.0)']} // Mengurangi opasitas gradien
        style={styles.backgroundGradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Find Your Perfect Outfit</Text>
          <Text style={styles.subtitle}>Snap a photo or upload an image</Text>
          <TouchableOpacity style={styles.takePhotoButton}>
            <Text style={styles.buttonText}>Snap Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadImageButton}>
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Pastikan gradien menutupi seluruh layar
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  takePhotoButton: {
    backgroundColor: '#F56C6C',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 15,
    elevation: 5,
  },
  uploadImageButton: {
    backgroundColor: 'transparent',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VisualSearch;
