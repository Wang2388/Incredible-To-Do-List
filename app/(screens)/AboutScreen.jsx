import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import HandleButton from "../../components/HandleButton";
import { router } from "expo-router";

const AboutScreen = () => {
  const appName = "My To Do List";
  const yourName = "Dennis Chung";
  const currentDate = new Date().toLocaleDateString();

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.inText}>App Name is {appName}</Text>
      <Text style={styles.inText}>My Name is {yourName}</Text>
      <Text style={styles.inText}>Current Date is {currentDate}</Text>

      <HandleButton
        title="Back to Home"
        isLoading={false}
        handlePress={() => {
          router.push("/");
        }}
        containerStyle={styles.button}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  inText: {
    fontSize: 20,
    color: "white",
    fontWeight: "300",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#fff4aa",
    width: "50%",
    marginTop: 20,
  },
});

export default AboutScreen;
