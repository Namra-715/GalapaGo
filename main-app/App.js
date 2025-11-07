import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

import ThingsToDoScreen from './screens/ThingsToDoScreen';
import HotelsScreen from './screens/HotelsScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import CultureHistoryScreen from './screens/CultureHistoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  console.log('App component loaded');
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#2E7D32',
          tabBarInactiveTintColor: '#757575',
          headerStyle: {
            backgroundColor: '#2E7D32',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="ThingsToDo"
          component={ThingsToDoScreen}
          options={{
            title: 'Things to Do',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons/compass.png')}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Hotels"
          component={HotelsScreen}
          options={{
            title: 'Hotels',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons/bed.png')}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsScreen}
          options={{
            title: 'Restaurants',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons/food.png')}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="CultureHistory"
          component={CultureHistoryScreen}
          options={{
            title: 'Culture & History',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons/history.png')}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
