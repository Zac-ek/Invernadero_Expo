import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Init from "./Views/Init";
import Home from "./Views/home/home";
import Profile from "./Views/Profile";
import Login from "./Views/Login";
import GreenhouseRegister from "./Views/home/GreenhouseRegister";
import GreenhouseStatus from "./Views/home/GreenhouseStatus";
import GreenhouseSystems from "./Views/home/GreenhouseSystems";
import CustomDrawerContent from "./components/CustomDrawerContent";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Init" component={Init} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="GreenhouseStatusScreen"
        component={GreenhouseStatus}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GreenhouseRegisterScreen"
        component={GreenhouseRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GreenhouseSystemsScreen"
        component={GreenhouseSystems}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={MainStack} // Este es el stack principal
          options={{ title: "Inicio" }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Perfil" }}
        />
        <Drawer.Screen
          name="GreenhouseStatus"
          component={GreenhouseStatus}
          options={{ title: "Estado del invernadero" }}
        />
        <Drawer.Screen
          name="GreenhouseRegister"
          component={GreenhouseRegister}
          options={{ title: "Registros de los invernaderos" }}
        />
        <Drawer.Screen
          name="GreenhouseSystems"
          component={GreenhouseSystems}
          options={{ title: "Sistemas de los invernaderos" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
