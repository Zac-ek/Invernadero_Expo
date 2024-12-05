import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import CustomNavbar from "../../components/CustomNavbar"; 

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../../img/bay.png")} style={styles.img2} />
      <Image source={require("../../img/bay.png")} style={styles.img3} />
      <CustomNavbar navigation={navigation} title="Invernadero" />
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>¡Bienvenido a tu Invernadero!</Text>
        <Text style={styles.subText}>
          Explora y gestiona tus recursos fácilmente
        </Text>
      </View>
      {/* Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Estado de los Invernaderos</Text>
            <Image
              style={styles.cardImage}
              source={require("../../img/invernadero.png")}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Registro de los Invernaderos</Text>
            <Image
              style={styles.cardImage}
              source={require("../../img/documentacion.png")}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Sistemas de los Invernaderos</Text>
            <Image
              style={styles.cardImage}
              source={require("../../img/sistema_Invernadero.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF2DF",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 32,
  },
  navTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  img2: {
    position: "absolute",
    top: 200,
    right: 0,
    width: 150,
    height: 150,
  },
  img3: {
    position: "absolute",
    left: 0,
    top: 570,
    width: 150,
    height: 150,
    transform: [{ rotate: "180deg" }],
  },
  navButton: {
    padding: 10,
  },
  welcomeSection: {
    padding: 20,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  cardContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: "#D5EEB3",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardImage: {
    width: 60,
    height: 60,
  },
});

export default Home;
