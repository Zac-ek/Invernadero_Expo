import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomNavbar = ({ navigation, title = "Invernadero" }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.toggleDrawer()} // Abre el menú lateral
      >
        <Icon name="menu-outline" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Título y logo */}
      <View style={styles.navCenter}>

        <Text style={styles.navTitle}>{title}</Text>
      </View>

      {/* Botón del perfil */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Profile")} // Navega a la pantalla de perfil
      >
        <Icon name="person" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4CAF50", // Cambia el color a un verde
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
    marginTop:35
  },
  navButton: {
    padding: 10,
  },
  navCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  navImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20, // Hace la imagen circular
  },
  navTitle: {
    fontSize: 20,
    color: "#fff", // Cambia el color del texto a blanco
    fontWeight: "bold",
  },
});

export default CustomNavbar;
