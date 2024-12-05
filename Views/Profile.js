import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomNavbar from "../components/CustomNavbar";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomNavbar navigation={navigation} title="Invernadero" />
      <Text style={styles.text}>Perfil del Usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF2DF",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Profile;
