import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import { AppNavigator } from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBwQtxKbHJsPsApyPFy7fZ4Kv8DWhIuk8U',
  authDomain: 'instagram-16731.firebaseapp.com',
  projectId: 'instagram-16731',
  storageBucket: 'instagram-16731.appspot.com',
  messagingSenderId: '39753228835',
  appId: '1:39753228835:web:2a5f40be5833dae75dc796',
  measurementId: 'G-VGMK348EQ4',
};

export const app = firebase.initializeApp(firebaseConfig);


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
