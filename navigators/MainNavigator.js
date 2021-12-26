import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
// import Ionicons from '@expo/vector-icons/Ionicons' // TODO: ADD ICONS

const { useState } = React;

const Tab = createBottomTabNavigator();

const AccountScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Your Account</Text>
    </View>
  )
};

const SearchScreen = () => {
  const [value, setValue] = useState('');
  const handleChangeValue = (e) => setValue(e.value);
  const handleSearch = () => console.log("SEARCHING FOR: ", value);
  return (
    <View style={[styles.view, { flexDirection: 'row' }]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeValue}
        placeholder='Search'
      />
      <Button color='hsl(260, 70%, 25%)' style={styles.button} title='Search' onPress={handleSearch} />
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

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 32
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    marginRight: 10,
    padding: 10,
    width: '50%',
  },
  button: {
    borderRadius: 4,
    borderColor: 'blue',
    borderWidth: 1,

  }
})