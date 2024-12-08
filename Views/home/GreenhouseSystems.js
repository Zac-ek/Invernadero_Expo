import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomNavbar from "../../components/CustomNavbar";
import { useNavigation } from "@react-navigation/native";
function GreenhouseSystems() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomNavbar navigation={navigation} title="Sistema del invernadero" />
      <Text style={styles.text}>Sistemas de los invernaderos</Text>
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
export default GreenhouseSystems;
