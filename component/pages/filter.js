import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, PanResponder, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Filters = ({ navigation }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]); // Set initial price range in dollars
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);

  const colors = ['#000000', '#FFFFFF', '#0000FF', '#FF0000', '#8B4513', '#FFC0CB', '#808080', '#008000', '#FFFF00'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const categories = ['All', 'Women', 'Kids'];
  const brands = ['casual', 'chic', 'vintage', 'street', 'formal', 'retro'];

  const minPrice = 0;
  const maxPrice = 3000; // Set max price to 3000 dollars
  const rangeWidth = 320;

  const minPriceAnimation = useRef(new Animated.Value(0)).current;
  const maxPriceAnimation = useRef(new Animated.Value(rangeWidth)).current;

  const updatePriceRange = () => {
    minPriceAnimation.addListener(({ value }) => {
      const min = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((maxPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });

    maxPriceAnimation.addListener(({ value }) => {
      const min = Math.round((minPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });
  };

  const panResponderMin = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMin = Math.max(0, Math.min(rangeWidth, gestureState.moveX));
        minPriceAnimation.setValue(newMin);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const panResponderMax = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMax = Math.max(minPriceAnimation._value, Math.min(rangeWidth, gestureState.moveX));
        maxPriceAnimation.setValue(newMax);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const toggleSelection = (item, setSelectedItems, selectedItems) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const discardFilters = () => {
    setSelectedPriceRange([minPrice, maxPrice]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategory('All');
    setSelectedBrands([]);
  };

  const applyFilters = () => {
    console.log('Filters Applied:', {
      selectedPriceRange,
      selectedColors,
      selectedSizes,
      selectedCategory,
      selectedBrands,
    });
  };

  const formatDollars = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Filters</Text>
      </View>

      <Text style={styles.sectionTitle}>Price Range</Text>
      <View style={styles.priceRangeContainer}>
        <View style={styles.priceBar}>
          <Animated.View
            style={[
              styles.priceIndicator,
              {
                left: minPriceAnimation,
              },
            ]}
            {...panResponderMin.panHandlers}
          />
          <Animated.View
            style={[
              styles.priceIndicator,
              {
                left: maxPriceAnimation,
              },
            ]}
            {...panResponderMax.panHandlers}
          />
          <View style={styles.priceRangeOverlay} />
        </View>
        <Text style={styles.priceRangeText}>
          {formatDollars(selectedPriceRange[0])} - {formatDollars(selectedPriceRange[1])}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Color</Text>
      <View style={styles.colorContainer}>
        {colors.map(color => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorCircle,
              {
                backgroundColor: color,
                borderColor: selectedColors.includes(color) ? '#FF6F61' : '#fff',
              }
            ]}
            onPress={() => toggleSelection(color, setSelectedColors, selectedColors)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              {
                backgroundColor: selectedSizes.includes(size) ? '#FF6F61' : '#F3F4F6',
              }
            ]}
            onPress={() => toggleSelection(size, setSelectedSizes, selectedSizes)}
          >
            <Text style={[
              styles.sizeText,
              {
                color: selectedSizes.includes(size) ? '#fff' : '#333',
              }
            ]}>
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              {
                backgroundColor: selectedCategory === category ? '#FF6F61' : '#F3F4F6',
              }
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              {
                color: selectedCategory === category ? '#fff' : '#333',
              }
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Brand</Text>
      <View style={styles.brandContainer}>
        {brands.map(brand => (
          <TouchableOpacity
            key={brand}
            style={[
              styles.brandButton,
              {
                backgroundColor: selectedBrands.includes(brand) ? '#FF6F61' : '#F3F4F6',
              }
            ]}
            onPress={() => toggleSelection(brand, setSelectedBrands, selectedBrands)}
          >
            <Text style={[
              styles.brandText,
              {
                color: selectedBrands.includes(brand) ? '#fff' : '#333',
              }
            ]}>
              {brand}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.discardButton} onPress={discardFilters}>
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  pageTitle: {
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
    fontWeight: '600',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: '500',
    color: '#555',
  },
  priceRangeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  priceBar: {
    height: 40,
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    position: 'relative',
    justifyContent: 'center',
  },
  priceIndicator: {
    width: 25,
    height: 40,
    backgroundColor: '#FF6F61',
    position: 'absolute',
    top: 0,
    borderRadius: 10,
  },
  priceRangeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  priceRangeText: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
    borderWidth: 2,
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  sizeButton: {
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  sizeText: {
    fontSize: 16,
    fontWeight: '400',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '400',
  },
  brandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  brandButton: {
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  brandText: {
    fontSize: 16,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  discardButton: {
    flex: 1,
    backgroundColor: '#FF6F61',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 10,
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#FF6F61',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
});

export default Filters;