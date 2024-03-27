import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import TelaRecSenha from './screens/TelaRecSenha';
import TelaCod from './screens/TelaCod';
import TrocaSenha from './screens/TrocaSenha';
import TelaCadastro from './screens/TelaCadastro';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='TelaCadastro'>
      <Stack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true, headerShown: false}} />
      <Stack.Screen name="TelaRecSenha" component={TelaRecSenha} options={{ title: '', headerTransparent: true}}/>
      <Stack.Screen name="TelaCod" component={TelaCod} options={{ title: '', headerTransparent: true}}/>
      <Stack.Screen name="TrocaSenha" component={TrocaSenha} options={{ title: '', headerTransparent: true}}/>
      <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{ title: '', headerTransparent: true}}/>
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

