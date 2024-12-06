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
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
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
    top: 220,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  img2: {
    position: 'absolute', 
    top: 70,
    right: 0,
    width: 150,
    height: 150,
  },
  img3: {
    position: 'absolute',       
    left: 0,
    top: 370,      
    width: 150,
    height: 150, 
    transform: [{ rotate: '180deg' }],
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
});
