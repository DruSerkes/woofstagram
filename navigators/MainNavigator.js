import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
// import Ionicons from '@expo/vector-icons/Ionicons' // TODO: ADD ICONS

const Tab = createBottomTabNavigator();

const AccountScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Your Account</Text>
    </View>
  )
};


/**
 * After you created the <MainNavigator>, add a new screen to our previous stack navigator. 
 * Give it the name Main and render the <MainNavigator> as the screen component.
 */
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