import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/Logo.jpg')}
        style={styles.img} 
      />
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Image
        source={require('../img/bay.png')}
        style={styles.img3} 
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D5EEB3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        position: 'absolute',
        top: 120,
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    img3: {
        position: 'absolute',       
        left: -3,
        top: 630,      
        width: 150,
        height: 150, 
        transform: [{ rotate: '180deg' }],
    },
    input: {
        backgroundColor: '#9AC46F',
        width: 250,
        height: 45,
        borderRadius: 20,
        marginVertical: 10
    },
    customButton: {
      position: 'absolute',
      top: 550,
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