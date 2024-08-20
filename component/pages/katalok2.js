import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const katalok2 = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (label) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [label]: !prevFavorites[label],
    }));
  };

  const data = [
    {
      label: 'Pullover',
      price: '$18',
      rating: 4.5,
      reviews: 12,
      image: require('./assets/sebelas.png'),
    },
    {
      label: 'Blouse',
      price: '$24',
      rating: 4.2,
      reviews: 145,
      image: require('./assets/duabelas.png'),
      isNew: true,
    },
    {
      label: 'T-shirt',
      price: '$12',
      rating: 4.8,
      reviews: 23,
      image: require('./assets/tigabelas.png'),
    },
    {
      label: 'Shirt',
      price: '$15',
      rating: 4.7,
      reviews: 89,
      image: require('./assets/empatbls.png'),
      discount: '10%',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#333333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Women's tops</Text>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialIcons name="search" size={24} color="#333333" />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryTab}>
          <Text style={styles.categoryTabText}>T-shirts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryTab}>
          <Text style={styles.categoryTabText}>Crop tops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryTab}>
          <Text style={styles.categoryTabText}>Sleeveless</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filters</Text>
          <MaterialIcons name="filter-list" size={20} color="#333333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortText}>Price: lowest to high</Text>
          <MaterialIcons name="arrow-downward" size={20} color="#333333" style={styles.sortIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.productImage} />
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productLabel}>{item.label}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{item.rating}</Text>
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <Text style={styles.reviewsText}>({item.reviews})</Text>
              </View>
              {item.isNew && (
                <View style={styles.newLabelContainer}>
                  <Text style={styles.newLabelText}>New</Text>
                </View>
              )}
              {item.discount && (
                <View style={styles.discountContainer}>
                  <Text style={styles.discountText}>{item.discount} OFF</Text>
                </View>
              )}
              <TouchableOpacity
                style={styles.favoriteIcon}
                onPress={() => toggleFavorite(item.label)}
              >
                <MaterialIcons
                  name={favorites[item.label] ? 'favorite' : 'favorite-border'}
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    paddingRight: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    flex: 1,
  },
  searchButton: {
    paddingLeft: 8,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  categoryTab: {
    backgroundColor: '#F1F1F1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  categoryTabText: {
    fontSize: 16,
    color: '#333333',
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButtonText: {
    fontSize: 16,
    color: '#333333',
    marginRight: 4,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 16,
    color: '#333333',
    marginRight: 4,
  },
  sortIcon: {
    marginLeft: 4,
  },
  productList: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  productPrice: {
    fontSize: 16,
    color: '#333333',
    marginVertical: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#333333',
    marginRight: 4,
  },
  reviewsText: {
    fontSize: 14,
    color: '#888888',
  },
  newLabelContainer: {
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  newLabelText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  discountContainer: {
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
});

export default katalok2;