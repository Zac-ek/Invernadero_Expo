import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.drawerContainer}>
      {/* Encabezado con imagen */}
      <View style={styles.header}>
        <Image
          source={require("../img/Logo.jpg")} 
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Usuario</Text>
        <Text style={styles.userEmail}>usuario@correo.com</Text>
      </View>

      {/* Opciones del menú */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Pie de página con botón personalizado */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => console.log("Cerrar sesión")}
        >
          <Icon name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: "#4CAF50", // Color del encabezado
    padding: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Hace la imagen circular
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  userEmail: {
    fontSize: 14,
    color: "#fff",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#4CAF50",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    marginLeft: 10,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CustomDrawerContent;
