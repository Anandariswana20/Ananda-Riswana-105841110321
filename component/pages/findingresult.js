import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FindingResults = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={70} color="#4A90E2" style={styles.searchIcon} />
      <Text style={styles.text}>Finding similar results...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
  },
  searchIcon: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
    letterSpacing: 1.2,
  },
});

export default FindingResults;
