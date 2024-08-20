import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Visual = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Adjust Your Image</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('./assets/image2.png')} 
          style={styles.imageBackground}
        >
          <View style={styles.overlay}>
            <View style={styles.cropArea}>
              <View style={[styles.corner, styles.cornerTopLeft]} />
              <View style={[styles.corner, styles.cornerTopRight]} />
              <View style={[styles.corner, styles.cornerBottomLeft]} />
              <View style={[styles.corner, styles.cornerBottomRight]} />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialIcons
            name="search"
            size={36}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center', // Menjaga elemen-elemen agar berada di tengah secara vertikal
    alignItems: 'center', // Menjaga elemen-elemen agar berada di tengah secara horizontal
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#BBBBBB',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20, // Menambahkan margin bawah agar tidak terlalu dekat dengan gambar
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: 300, // Menetapkan lebar gambar latar belakang
    height: 300, // Menetapkan tinggi gambar latar belakang
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropArea: {
    position: 'relative',
    width: 200,
    height: 200,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 15,
  },
  corner: {
    width: 30,
    height: 30,
    borderColor: 'white',
    borderWidth: 2,
  },
  cornerTopLeft: {
    position: 'absolute',
    top: -15,
    left: -15,
    borderLeftWidth: 2,
    borderTopWidth: 2,
  },
  cornerTopRight: {
    position: 'absolute',
    top: -15,
    right: -15,
    borderRightWidth: 2,
    borderTopWidth: 2,
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: -15,
    left: -15,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  searchButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default Visual;
