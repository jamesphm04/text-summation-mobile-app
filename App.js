import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/Home';
import ProjectT from './pages/ProjectT/ProjectT';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HyperAI  ">
        <Stack.Screen name="HyperAI" component={Home} />
        <Stack.Screen name="ProjectT" component={ProjectT} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
