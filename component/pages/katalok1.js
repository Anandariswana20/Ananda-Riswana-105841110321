import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const katalok1 = () => {
  const data = [
    {
      label: 'New',
      image: require('./assets/sebelas.png'),
    },
    {
      label: 'Cardigan',
      image: require('./assets/duabelas.png'),
    },
    {
      label: 'Casual',
      image: require('./assets/tigabelas.png'),
    },
    {
      label: 'One Set',
      image: require('./assets/empatbls.png'),
    },
    // Tambahkan lebih banyak item jika diperlukan untuk menguji scroll
  ];

  return (
    <View style={styles.container}>
      {/* Header Section with Back Arrow and Categories */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          {/* Back Arrow */}
          <TouchableOpacity style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Categories</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={20} color="#888888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888888"
          />
        </View>

        {/* Category Tabs */}
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>All</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Women</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Summer Sales Section */}
      <View style={styles.salesContainer}>
        <Text style={styles.salesText}>SUMMER SALES</Text>
        <Text style={styles.salesSubText}>Up to 50% off</Text>
      </View>

      {/* Other categories */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItemList}>
            <Image source={item.image} style={styles.categoryImage} />
            <View style={styles.categoryLabelContainer}>
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.categoryList} // Pastikan konten tidak terpotong
        scrollEnabled={true} // Pastikan FlatList bisa discroll
      />
    </View>
  );
};

// Styles for the Categories screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 50, 
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    paddingRight: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  categoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  underline: {
    marginTop: 4,
    height: 2,
    backgroundColor: 'red',
    width: '100%',
  },
  salesContainer: {
    backgroundColor: 'red',
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  salesText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  salesSubText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
  categoryList: {
    paddingBottom: 18,
  },
  categoryItemList: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginRight: 8,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default katalok1;