import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Image, View } from 'react-native';

import ThingsToDoScreen from './screens/ThingsToDoScreen';
import HotelsScreen from './screens/HotelsScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import MoreScreen from './screens/MoreScreen';
import CultureHistoryScreen from './screens/CultureHistoryScreen';
import SustainabilityScreen from './screens/SustainabilityScreen';
import TransportationScreen from './screens/TransportationScreen';
import SocialCustomsScreen from './screens/SocialCustomsScreen';
import FloatingChatButton from './components/FloatingChatButton';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack navigator for "More" tab screens
function MoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2E7D32',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="More" 
        component={MoreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="CultureHistory" 
        component={CultureHistoryScreen}
        options={{ title: 'Culture & History' }}
      />
      <Stack.Screen 
        name="Sustainability" 
        component={SustainabilityScreen}
        options={{ title: 'Sustainability' }}
      />
      <Stack.Screen 
        name="Transportation" 
        component={TransportationScreen}
        options={{ title: 'Transportation' }}
      />
      <Stack.Screen 
        name="SocialCustoms" 
        component={SocialCustomsScreen}
        options={{ title: 'Know Before You Go' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  console.log('App component loaded');
  return (
    <View style={{ flex: 1 }}>
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
          name="More"
          component={MoreStack}
          options={{
            title: 'More',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons/info.png')}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tab.Navigator>
      </NavigationContainer>
      <FloatingChatButton />
    </View>
  );
}
