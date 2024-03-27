import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Button, Image, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function TelaCod({navigation}) {

return(

<View style={styles.container}>

<View style={Barra_Cod.container}>

<Text style={Texto_Cod.container} numberOfLines={1}>CÓDIGO</Text>

</View> 

<View style={Barra_Confirm.container}>

<Pressable onPress={() => navigation.navigate('TrocaSenha')}> 

<Text style={Confirm.container} numberOfLines={1}>Confirmar</Text>

</Pressable>

</View>

<Text style={Insira.container}>Insíra o Código:</Text>

<Image source={require('../assets/Logo.png')} style={Logo.container} resizeMode='cover'/>

</View>

)


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Logo = StyleSheet.create({
  container: {
    width: 250,
    height: 120,
    position: 'absolute',
    top: 50,
    left: 30,
  },
});

const Barra_Cod = StyleSheet.create({
  container: {
    width: 300,
    height: 38,
    backgroundColor: '#d9d9d9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    position: 'absolute',
    top: 280,
    left: 8,
    right: 10,
  },
});

const Texto_Cod = StyleSheet.create({
  container: {
    height: 15,
    fontFamily: 'Francois One',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 15,
    color: 'rgba(70, 70, 70, 0.5)',
    position: 'relative',
    textAlign: 'left',
    zIndex: 1,
    marginTop: 12,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 10,
  },
});

const Barra_Confirm = StyleSheet.create({
  container: {
    width: 280,
    height: 40,
    backgroundColor: '#b811f5',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    opacity: 0.75,
    position: 'absolute',
    top: 360,
    left: 16,
  },
});

const Confirm = StyleSheet.create({
  container: {
    display: 'flex',
    width: 280,
    height: 32,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 29,
    color: '#ffffff',
    position: 'relative',
    textAlign: 'center',
    zIndex: 1,
    marginTop: 6,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
});

const Insira = StyleSheet.create({
  container: {
    width: 300,
    height: 35,
    display: 'flex',
    height: 35,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Inter',
    fontSize: 26,
    fontWeight: '400',
    lineHeight: 17,
    color: '#c4c4c4',
    position: 'absolute',
    top: 220,
    left: 50,
    textAlign: 'auto',
  
  },
});



