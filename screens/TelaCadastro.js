import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Button, Image, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function TelaCadastro({navigation}) {

return(

<View style={styles.container}>

<View style={Barra_Usuario.container}>

<Text style={Texto.container} numberOfLines={1}>Usuário</Text>

</View> 

<View style={Barra_Email.container}>

<Text style={Texto.container} numberOfLines={1}>E-mail</Text>

</View> 

<View style={Barra_Senha.container}>

<Text style={Texto.container} numberOfLines={1}>Senha</Text>

</View> 

<View style={Barra_Confirm_Senha.container}>

<Text style={Texto.container} numberOfLines={1}>Confirmar Senha</Text>

</View> 

<View style={Barra_Cadastre_Se.container}>

<Pressable onPress={() => navigation.navigate('Login')}> 

<Text style={Cadastre_se.container} numberOfLines={1}>Cadastre-se</Text>

</Pressable>

</View>

<Text style={Cadastre.container}>Cadastre-se:</Text>

<Image source={require('../assets/Logo.png')} style={Logo.container} resizeMode='cover'/>

<Text style={Texto2.container}> Ao se registrar, você aceita nossos {''} <Text style={Texto_Roxo.container}>termos de uso</Text> e a nossa <Text style={Texto_Roxo.container}>política de privacidade.</Text>  </Text>

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

const Barra_Usuario = StyleSheet.create({
  container: {
    width: 300,
    height: 38,
    backgroundColor: '#d9d9d9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    position: 'absolute',
    top: 235,
    left: 8,
    right: 10,
  },
});

const Barra_Email = StyleSheet.create({
    container: {
      width: 300,
      height: 38,
      backgroundColor: '#d9d9d9',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
      position: 'absolute',
      top: 285,
      left: 8,
      right: 10,
    },
  });

  const Barra_Senha = StyleSheet.create({
    container: {
      width: 300,
      height: 38,
      backgroundColor: '#d9d9d9',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
      position: 'absolute',
      top: 335,
      left: 8,
      right: 10,
    },
  });

  const Barra_Confirm_Senha = StyleSheet.create({
    container: {
      width: 300,
      height: 38,
      backgroundColor: '#d9d9d9',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
      position: 'absolute',
      top: 385,
      left: 8,
      right: 10,
    },
  });

const Texto = StyleSheet.create({
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

const Barra_Cadastre_Se = StyleSheet.create({
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
    top: 440,
    left: 16,
  },
});

const Cadastre_se = StyleSheet.create({
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

const Cadastre = StyleSheet.create({
  container: {
    width: 200,
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
    top: 190,
    left: 70,
    right: 70,
    textAlign: 'auto',
  
  },
});

const Texto2 = StyleSheet.create({
    container: {
      width: 300,
      height: 10,
      display: 'flex',
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 17,
      color: '#c4c4c4',
      top: 485,
      left: 0,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      position: 'fixed',
      flexDirection: 'row',
      flexWrap: 'wrap',

      
    },
  });
  
  const Texto_Roxo = StyleSheet.create({
    container: {
      color: '#b811f5',
      textDecorationLine: 'underline',
    },
  });



