import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { AccountScreen } from '../screens/AccountScreen';
// import Ionicons from '@expo/vector-icons/Ionicons' // TODO: ADD ICONS

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
      />

      <Tab.Screen
        name='Search'
        component={SearchScreen}
      />

      <Tab.Screen
        name='Account'
        component={AccountScreen}
      />
    </Tab.Navigator>
  )
};