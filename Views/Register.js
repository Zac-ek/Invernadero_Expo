import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/bay.png')}
        style={styles.img2} 
      />
      <Image
        source={require('../img/bay.png')}
        style={styles.img3} 
      />
      <TextInput
        style={styles.input}
        placeholder="  Nombre de Usuario"
      />
      <TextInput
        style={styles.input}
        placeholder="  Correo Electronico"
      />
      <TextInput
        style={styles.input}
        placeholder="  Contraseña"
      />
      <TextInput
        style={styles.input}
        placeholder="  Confirmar Contraseña"
      />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D5EEB3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        // position: 'absolute',
        // top: 400,  
        backgroundColor: '#9AC46F',
        width: 350,
        height: 60,
        borderRadius: 20,
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center'
    },
    img2: {
        position: 'absolute', 
        top: 70,
        right: -3,
        width: 150,
        height: 150,
    },
    img3: {
        position: 'absolute',       
        left: -3,
        top: 790,     
        width: 150,
        height: 150, 
        transform: [{ rotate: '180deg' }],
    },
})