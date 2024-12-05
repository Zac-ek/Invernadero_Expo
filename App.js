import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Init from "./Views/Init";
import Home from "./Views/home/home";
import Profile from "./Views/Profile";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Init" component={Init} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Init" screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="Init"
          component={MainStack}
          options={{ title: "Inicio" }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Perfil" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
