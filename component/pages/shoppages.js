import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// Data produk
const saleProducts = [
    {
        id: '8',
        name: 'Cardigan',
        oldPrice: '$60',
        newPrice: '$50',
        imageUrl: require('../../assets/image1.png'),
        rating: 4.5,
        discount: 17,
    },
    {
        id: '9',
        name: 'One Set',
        oldPrice: '$70',
        newPrice: '$60',
        imageUrl: require('../../assets/image2.png'),
        rating: 4.0,
        discount: 14,
    },
    {
        id: '10',
        name: 'Casual',
        oldPrice: '$80',
        newPrice: '$70',
        imageUrl: require('../../assets/image3.png'),
        rating: 4.7,
        discount: 12,
    },
    {
        id: '11',
        name: 'Old Money',
        oldPrice: '$90',
        newPrice: '$80',
        imageUrl: require('../../assets/image4.png'),
        rating: 5.0,
        discount: 11,
    },
    {
        id: '12',
        name: 'Feminim Blue',
        oldPrice: '$100',
        newPrice: '$90',
        imageUrl: require('../../assets/image5.png'),
        rating: 4.3,
        discount: 10,
    },
    {
        id: '13',
        name: 'Feminim Black',
        oldPrice: '$110',
        newPrice: '$100',
        imageUrl: require('../../assets/image6.png'),
        rating: 4.6,
        discount: 9,
    },
    {
        id: '14',
        name: 'Smart Casual',
        oldPrice: '$120',
        newPrice: '$110',
        imageUrl: require('../../assets/image7.png'),
        rating: 4.9,
        discount: 8,
    },
];

const newProducts = [
    {
        id: '1',
        name: 'Cardigan',
        price: '$30',
        imageUrl: require('../../assets/image1.png'),
    },
    {
        id: '2',
        name: 'One Set',
        price: '$35',
        imageUrl: require('../../assets/image2.png'),
    },
    {
        id: '3',
        name: 'Casual',
        price: '$40',
        imageUrl: require('../../assets/image3.png'),
    },
    {
        id: '4',
        name: 'Old Money',
        price: '$45',
        imageUrl: require('../../assets/image4.png'),
    },
    {
        id: '5',
        name: 'Feminim Blue',
        price: '$50',
        imageUrl: require('../../assets/image5.png'),
    },
    {
        id: '6',
        name: 'Feminim Black',
        price: '$55',
        imageUrl: require('../../assets/image6.png'),
    },
    {
        id: '7',
        name: 'Smart Casual',
        price: '$60',
        imageUrl: require('../../assets/image7.png'),
    },
];

export default function ShopScreen() {
    const [favorites, setFavorites] = useState({});
    const { height } = Dimensions.get('window'); // Get screen height

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id],
        }));
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header Section */}
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/delapan.jpg')} // Replace URL with local asset
                        style={[styles.headerImage, { height: height * 0.5}]} // Use calculated height
                    />
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Stylish Women</Text>
                    </View>
                </View>

                {/* Sale Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Sale</Text>
                        <View style={styles.viewAll}>
                            <Text style={styles.viewAllText}>View all</Text>
                        </View>
                    </View>
                    <Text style={styles.sectionSubtitle}>Super summer sale</Text>
                    <ScrollView horizontal>
                        {saleProducts.map((product) => (
                            <View key={product.id} style={styles.productContainer}>
                                <View style={styles.imageContainer}>
                                    <Image source={product.imageUrl} style={styles.productImage} />
                                    <TouchableOpacity onPress={() => toggleFavorite(product.id)} style={styles.favoriteIcon}>
                                        <Text style={styles.favoriteText}>
                                            {favorites[product.id] ? '♥' : '♡'}
                                        </Text>
                                    </TouchableOpacity>
                                    <View style={styles.discountContainer}>
                                        <Text style={styles.discountText}>{product.discount}% OFF</Text>
                                    </View>
                                </View>
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productOldPrice}>{product.oldPrice}</Text>
                                <Text style={styles.productNewPrice}>{product.newPrice}</Text>
                                <View style={styles.ratingContainer}>
                                    {[...Array(5)].map((_, index) => (
                                        <Text key={index} style={styles.star}>
                                            {index < product.rating ? '★' : '☆'}
                                        </Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* New Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>New</Text>
                        <View style={styles.viewAll}>
                            <Text style={styles.viewAllText}>View all</Text>
                        </View>
                    </View>
                    <Text style={styles.sectionSubtitle}>You've never seen it before!</Text>
                    <ScrollView horizontal>
                        {newProducts.map((product) => (
                            <View key={product.id} style={styles.productContainer}>
                                <Image source={product.imageUrl} style={styles.productImage} />
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productPrice}>{product.price}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
    },
    headerImage: {
        width: '100%',
    },
    headerTextContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    viewAll: {
    },
    viewAllText: {
        fontSize: 16,
        color: 'black',
    },
    sectionSubtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
    },
    productContainer: {
        marginRight: 10,
    },
    imageContainer: {
        position: 'relative',
    },
    productImage: {
        width: 150,
        height: 150,
    },
    favoriteIcon: {
        position: 'absolute',
        right: 2,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 5,
        zIndex: 1,
    },
    favoriteText: {
        fontSize: 20,
        color: 'red',
    },
    discountContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
        borderRadius: 10,
    },
    discountText: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    productOldPrice: {
        fontSize: 16,
        color: 'gray',
        textDecorationLine: 'line-through',
    },
    productNewPrice: {
        fontSize: 16,
        color: 'red',
    },
    productPrice: {
        fontSize: 16,
        color: 'gray',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    star: {
        color: '#FFD700',
        fontSize: 16,
    },
});
