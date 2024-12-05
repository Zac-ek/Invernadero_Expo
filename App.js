import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitScreen from "./Views/Init";
// import LoginScreen from './Views/Login';
import home from "./Views/home/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Init"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Init" component={InitScreen} />
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Home" component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
