import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILSplash } from './assets';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
     
        <Router />
     
    </NavigationContainer>
    
  );
};

export default App;
const styles = StyleSheet.create({})