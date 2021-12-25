import * as React from 'react';
import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';


const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#E8E8E8' }}>
    <HomeScreen />
  </SafeAreaView>
);

export default App;

