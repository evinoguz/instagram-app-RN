import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile/index';
import {
  Home,
  HomeField,
  SearchField,
  Search,
  ReelField,
  Reel,
  ShopField,
  Shop,
} from './Icons';

const Tab = createBottomTabNavigator();

export default function Screen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeField size={30} /> : <Home size={30} />,
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchField size={30} /> : <Search size={30} />,
        }}
      />
      <Tab.Screen
        name="reel"
        component={ReelScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ReelField size={26} /> : <Reel size={30} />,
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShopField size={30} /> : <Shop size={30} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../assets/profile.png')}
              style={[
                styles.avatar,
                {borderColor: focused ? '#000' : 'transparent'},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 25,
  },
});
