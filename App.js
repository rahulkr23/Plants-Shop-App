// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/consts/Views/Screen/HomeScreen';
import DetailsScreen from './src/consts/Views/Screen/DetailsScreen';
import { StatusBar } from 'react-native';
import COLORS from './src/consts/Colors';



const Stack = createStackNavigator();

const App =() =>{
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white}></StatusBar>
      <Stack.Navigator screenOptions={{header:() => null}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
