import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Init({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/bay.png')}
        style={styles.img2} 
      />
      <Image
        source={require('../img/Logo.jpg')}
        style={styles.img} 
      />
      <Image
        source={require('../img/bay.png')}
        style={styles.img3} 
      />
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.Btn}
      >
        <Text style={styles.Rtext}>Registrarse</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5EEB3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    position: 'absolute',
    top: 270,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  img2: {
    position: 'absolute', 
    top: 70,
    right: -3,
    width: 200,
    height: 200,
  },
  img3: {
    position: 'absolute',       
    left: -3,
    top: 470,      
    width: 200,
    height: 200, 
    transform: [{ rotate: '180deg' }],
  },
  customButton: {
    position: 'absolute',
    top: 750,
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
  Rtext: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  Btn: {
    position: 'absolute',
    top: 900,
  }
});
