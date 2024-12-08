import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomNavbar from "../components/CustomNavbar";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const userData = {
    name: "Nombre Apellido",
    email: "usuario@correo.com",
    profileImage: "https://via.placeholder.com/150",
    stats: {
      greenhouses: 8,
      tasksCompleted: 150,
      pendingTasks: 5,
    },
  };

  return (
    <View style={styles.container2}>
      <CustomNavbar navigation={navigation} title="Perfil del Usuario" />
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: userData.profileImage }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.email}>{userData.email}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{userData.stats.greenhouses}</Text>
            <Text style={styles.statLabel}>Invernaderos</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>
              {userData.stats.tasksCompleted}
            </Text>
            <Text style={styles.statLabel}>Tareas Completadas</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{userData.stats.pendingTasks}</Text>
            <Text style={styles.statLabel}>Tareas Pendientes</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#EDF2DF",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profileHeader: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    backgroundColor: "#6AB04A",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  logoutButton: {
    backgroundColor: "#EB4D4B",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
