import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import CustomNavbar from "../../components/CustomNavbar";
import { useNavigation } from "@react-navigation/native";

function GreenhouseRegister() {
  const navigation = useNavigation();

  const [months, setMonths] = useState([
    { name: "Enero", active: false },
    { name: "Febrero", active: false },
    { name: "Marzo", active: false },
    { name: "Abril", active: false },
    { name: "Mayo", active: true },
    { name: "Junio", active: false },
    { name: "Julio", active: false },
    { name: "Agosto", active: false },
    { name: "Septiembre", active: false },
    { name: "Octubre", active: false },
    { name: "Noviembre", active: false },
    { name: "Diciembre", active: false },
  ]);

  const [dates, setDates] = useState([
    { day: "Lunes", date: 13 },
    { day: "Martes", date: 14 },
    { day: "Miércoles", date: 15 },
    { day: "Jueves", date: 16 },
    { day: "Viernes", date: 17 },
    { day: "Sábado", date: 18 },
    { day: "Domingo", date: 19 },
  ]);

  const [activities, setActivities] = useState([
    {
      time: "08:00",
      description: "Encender el sistema de ventilación.",
    },
    {
      time: "09:30",
      description: "Inspección de las plantas para detectar plagas.",
    },
    {
      time: "11:00",
      description: "Registrar temperatura y niveles de humedad.",
    },
    {
      time: "13:00",
      description: "Revisión del oxígeno en los invernaderos.",
    },
    {
      time: "15:00",
      description: "Riego de las plantas, en todos los invernaderos.",
    },
    {
      time: "17:00",
      description: "Aplicación de nutrientes a las plantas.",
    },
    {
      time: "19:00",
      description: "Cerrar los sistemas de riego y ventilación.",
    },
  ]);

  return (
    <View style={styles.container}>
      <CustomNavbar navigation={navigation} title="Registro del invernadero" />
      <FlatList
        data={months}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
        renderItem={({ item }) => (
          <Text
            style={[
              styles.month,
              item.active ? styles.activeMonth : styles.disabledMonth,
            ]}
          >
            {item.name}
          </Text>
        )}
      />

      {/* Carrusel de Fechas */}
      <FlatList
        data={dates}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
        renderItem={({ item }) => (
          <View style={styles.date}>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.number}>{item.date}</Text>
          </View>
        )}
      />

      {/* Horarios dinámicos */}
      <Text style={styles.scheduleTitle}>Horario</Text>
      <ScrollView>
        {activities.map((activity, index) => (
          <View key={index} style={styles.activity}>
            <Text style={styles.time}>{activity.time}</Text>
            <View style={styles.activityDetails}>
              <Text style={styles.activityText}>{activity.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF2DF",
  },
  carousel: {
    paddingHorizontal: 10,
  },
  month: {
    marginTop:20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 10,
  },
  activeMonth: {
    color: "#2C6E49",
  },
  disabledMonth: {
    color: "#B0B0B0",
  },
  date: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  day: {
    fontSize: 16,
    color: "#333",
  },
  number: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "#D5E8C8",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  scheduleTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  activity: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginRight: 10,
  },
  activityDetails: {
    flex: 1,
    backgroundColor: "#D5E8C8",
    padding: 10,
    borderRadius: 10,
  },
  activityText: {
    fontSize: 14,
    color: "#333",
  },
});

export default GreenhouseRegister;
