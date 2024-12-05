import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Init({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
      title='Iniciar Sesion'
      onPress={() => navigation.navigate('Home')}></Button>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D5EEB3',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
