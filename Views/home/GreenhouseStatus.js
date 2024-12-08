import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomNavbar from "../../components/CustomNavbar";
import { useNavigation } from "@react-navigation/native";

const GreenhouseStatus = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomNavbar navigation={navigation} title="Estado de Invernadero" />
      <Text style={styles.text}>Estado de los Invernaderos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF2DF",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default GreenhouseStatus;
