import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Users from '../JSON/Users.json'

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const userFound = Users.Users.find(
      (user) => (user.User === username || user.User === username.toLowerCase()) && user.Pass === password
    );

    if (userFound) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos. Por favor, intente de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bck} onPress={() => navigation.navigate('Init')}>
        <Image source={require('../img/Logo.jpg')} style={styles.img} />
      </TouchableOpacity>
      <TextInput
        style={styles.input1}
        placeholder="  Usuario/Correo"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input2}
        secureTextEntry={true}
        placeholder="  Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.customButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Image source={require('../img/bay.png')} style={styles.img3} />
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D5EEB3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bck:{
      position: 'absolute',
      top: 150,
    },
    img: {
      width: 200,
      height: 200,
      borderRadius: 100,
    },
    img3: {
      position: 'absolute',       
      left: -3,
      top: 730,     
      width: 200,
      height: 200, 
      transform: [{ rotate: '180deg' }],
    },
    input1: {
      position: 'absolute',
      top: 400,  
      backgroundColor: '#9AC46F',
      width: 350,
      height: 60,
      borderRadius: 20,
      marginVertical: 10,
      fontSize: 16,
      textAlign: 'center'
    },
    input2: {
      position: 'absolute',
      top: 480, 
      backgroundColor: '#9AC46F',
      width: 350,
      height: 60,
      borderRadius: 20,
      marginVertical: 10,
      fontSize: 16,
      textAlign: 'center'
    },
    customButton: {
      position: 'absolute',
      top: 600,
      backgroundColor: '#4C6B41',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginTop: 20, 
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
})