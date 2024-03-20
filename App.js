import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import TelaRecSenha from './screens/TelaRecSenha';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true, headerShown: false}} />
      <Stack.Screen name="TelaRecSenha" component={TelaRecSenha} />
    </Stack.Navigator>
  );
}

export default function App() {
  
  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  )


}

