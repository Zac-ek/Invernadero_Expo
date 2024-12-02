// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitScreen from './Views/Init';
import LoginScreen from './Views/Login';
import home from './Views/home/home'


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Init">
        <Stack.Screen name="Init" component={InitScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={home} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Button title='Iniciar Sesion'></Button>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5EEB3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
