import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomNavbar from "../../components/CustomNavbar";
import { useNavigation } from "@react-navigation/native";

function GreenhouseRegister() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomNavbar navigation={navigation} title="Registro del Invernadero" />
      <Text style={styles.text}>El registro de los invernaderos</Text>
    </View>
  );
}
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
export default GreenhouseRegister;
