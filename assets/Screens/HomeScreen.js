import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ username, onLogout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To YUMMY</Text>
      <Text style={styles.greeting}>Hi, {username}</Text>
      <Text style={styles.logout} onPress={onLogout}>
        Logout
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 20,
  },
  logout: {
    fontSize: 16,
    color: "purple",
    textDecorationLine: "underline",
  },
});

export default HomeScreen;
