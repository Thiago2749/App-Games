import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native-web';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';


export default function Login({navigation}) {

/*navigation.reset({
    index: 0.

})*/

return (

    <View style={styles.container}>
      
    <View style={Barra_Email.container}>

    <Text style={Texto_Barras.container} numberOfLines={1}>E-MAIL</Text>

    </View> 
      
    <View style={Barra_Senha.container}>

    <Text style={Texto_Barras.container} numberOfLines={1}>SENHA</Text>

    </View>

    <View style={Barra_Acessar.container}>

    <Text style={Acessar.container} numberOfLines={1}>ACESSAR</Text>

    </View>

    <View style={Barra_Google.container}>

    <Text style={Google.container} numberOfLines={1}>Faça Login com o Google</Text>

    <Image source={require('../assets/Google.png')} style={Imagem_Google.container} resizeMode='cover'/>

    </View>

    <Text style={Texto1.container} numberOfLines={1}>Não tenho uma conta. <Pressable onPress={() => navigation.navigate('TelaCadastro')}> <Text style={Criar.container}> Criar.</Text> </Pressable> </Text>

    <Text style={Texto2.container} numberOfLines={1}>Esqueci minha senha. <Pressable onPress={() => navigation.navigate('TelaRecSenha')}> <Text style={Recuperar.container}> Recuperar.</Text> </Pressable> </Text>


    <Image source={require('../assets/Logo.png')} style={Logo.container} resizeMode='cover'/>

    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
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
    top: 200,
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
    top: 250,
    left: 8,
    right: 10,
  },
});

const Texto_Barras = StyleSheet.create({
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

const Barra_Acessar = StyleSheet.create({
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
    top: 320,
    left: 16,
  },
});

const Acessar = StyleSheet.create({
  container: {
    display: 'flex',
    width: 300,
    height: 32,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Inter',
    fontSize: 24,
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

const Barra_Google = StyleSheet.create({
  container: {
    width: 280,
    height: 50,
    backgroundColor: '#b811f5',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    opacity: 0.75,
    position: 'absolute',
    top: 400,
    left: 16,
    zIndex: 1,
  },
});

const Google = StyleSheet.create({
  container: {
    display: 'flex',
    width: 280,
    height: 17,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 17,
    color: '#ffffff',
    position: 'absolute',
    top: 16,
    left: '40%',
    textAlign: 'center',
    zIndex: 2,
    transform: [{ translateX: -101 }],
  },
});

const Imagem_Google = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 11,
    left: 15,
  },
});

const Texto1 = StyleSheet.create({
  container: {
    width: 265,
    height: 28,
    display: 'flex',
    height: 17,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 17,
    color: '#c4c4c4',
    position: 'absolute',
    top: 480,
    left: 50,
    textAlign: 'left',
  },
});

const Criar = StyleSheet.create({
  container: {
    display: 'flex',
    width: 50,
    height: 28,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '400',
    color: '#b811f5',
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'left',
    textDecorationLine: 'underline',
    zIndex: 1,
  },
});

const Texto2 = StyleSheet.create({
  container: {
    width: 350,
    height: 28,
    display: 'flex',
    height: 17,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 17,
    color: '#c4c4c4',
    position: 'absolute',
    top: 510,
    left: 38,
    textAlign: 'left',
  },
});

const Recuperar = StyleSheet.create({
  container: {
    display: 'flex',
    width: 90,
    height: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '400',
    color: '#b811f5',
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'center',
    textDecorationLine: 'underline',
    zIndex: 1,
    
  },
});

const Logo = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    position: 'absolute',
    top: 10,
    left: 6,
  },
});
