import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Button } from 'react-native-web';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function TelaRecSenha({navigation}) {

return(

<View style={styles.container}>

    <Text style={texto.container}>Olá</Text>

    <Button onPress={() => navigation.navigate('Login')}/>

</View>

)


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const texto = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#0A0A0A',
    },
  });


