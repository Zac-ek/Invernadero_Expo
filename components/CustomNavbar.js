import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomNavbar = ({ navigation, title = "Invernadero" }) => {
  return (
    <View style={styles.navbar}>
      {/* Botón del menú */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.toggleDrawer()} // Abre el menú lateral
      >
        <Icon name="menu-outline" size={28} color="#000" />
      </TouchableOpacity>

      {/* Título de la barra */}
      <Text style={styles.navTitle}>{title}</Text>

      {/* Botón del perfil */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Profile")} // Navega a la pantalla de perfil
      >
        <Icon name="person" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
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
  navTitle: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
  },
});

export default CustomNavbar;
