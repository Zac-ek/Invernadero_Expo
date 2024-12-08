import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import CustomNavbar from "../../components/CustomNavbar";
import { useNavigation } from "@react-navigation/native";

const GreenhouseStatus = () => {
  const navigation = useNavigation();

  const greenhouses = [
    {
      id: 1,
      name: "Invernadero A",
      location: "Zona Norte",
      status: "Óptimo",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Invernadero B",
      location: "Zona Sur",
      status: "Mantenimiento",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Invernadero C",
      location: "Zona Este",
      status: "Revisión",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Invernadero D",
      location: "Zona Norte",
      status: "Óptimo",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Invernadero E",
      location: "Zona Sur",
      status: "Mantenimiento",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Invernadero F",
      location: "Zona Este",
      status: "Revisión",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 7,
      name: "Invernadero G",
      location: "Zona Este",
      status: "Revisión",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <View style={styles.container}>
      <CustomNavbar navigation={navigation} title="Estado de Invernadero" />
      <Text style={styles.title}>Estado de los Invernaderos</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {greenhouses.map((greenhouse) => (
          <View key={greenhouse.id} style={styles.card}>
            <Image source={{ uri: greenhouse.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{greenhouse.name}</Text>
              <Text style={styles.details}>
                Ubicación: {greenhouse.location}
              </Text>
              <Text style={styles.details}>Estado: {greenhouse.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que ocupe toda la pantalla
    backgroundColor: "#EDF2DF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 14,
    color: "#666",
  },
});

export default GreenhouseStatus;
