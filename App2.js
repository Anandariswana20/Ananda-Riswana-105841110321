import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing screens
import SignUpPage from './component/pages/signUp';
import LoginPage from './component/pages/login'; 
import HomeScreen from './component/pages/mainPage'; 
import ShopScreen from './component/pages/shoppages';
import FavoriteScreen from './component/pages/favoritePages';
import BagScreen from './component/pages/bagPages';

// Importing assets
import HomeActivated from './assets/home-activated.png';
import HomeInactive from './assets/home-inactive.png';
import ShopActivated from './assets/shop-activated.png';
import ShopInactive from './assets/shop-inactive.png';
import BagActivated from './assets/bag-activated.png';
import BagInactive from './assets/bag-inactive.png';
import FavoritesActivated from './assets/favorites-activated.png';
import FavoritesInactive from './assets/favorites-inactive.png';
import ProfileActivated from './assets/profil-activated.png';
import ProfileInactive from './assets/profil-inactive.png';

// Creating Bottom Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeActivated : HomeInactive}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ShopActivated : ShopInactive}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? BagActivated : BagInactive}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? FavoritesActivated : FavoritesInactive}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfileActivated : ProfileInactive}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainPage"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShopPages"
          component={ShopScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;