import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNavigator } from './navigators/MainNavigator';

const Stack = createStackNavigator();


const SignInScreen = ({ navigation }) => {
  const goToMain = () => navigation.navigate('Main');
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Sign In</Text>
      <Button title='Tap to sign in' onPress={goToMain} />
    </View>
  )
};

const SignUpScreen = ({ navigation }) => {
  const goToSignIn = () => navigation.navigate('SignIn');
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Sign Up</Text>
      <Button title='Tap to sign up' onPress={goToSignIn} />
    </View>
  )
};



const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='SignUp'>
      <Stack.Screen
        component={SignInScreen}
        name='SignIn'
      />
      <Stack.Screen
        component={SignUpScreen}
        name='SignUp'
      />
      <Stack.Screen
        component={MainNavigator}
        name='Main'
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    {/* <SafeAreaView style={{ flex: 1, backgroundColor: '#E8E8E8' }}>
        <HomeScreen />
      </SafeAreaView> */}
  </NavigationContainer>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 32
  }
})

export default App;

