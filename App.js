import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='ProductScreen' component={ProductScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}