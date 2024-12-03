import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import CustomButton from "../components/HandleButton";
import { useNavigation } from "expo-router";

function App() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.inContainer}>
        <Text style={styles.title}>To Do List</Text>
        <CustomButton
          title="Home for ToDo Task"
          isLoading={false}
          handlePress={() => {
            navigation.navigate("HomeScreen");
          }}
          containerStyle={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  inContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "85vh",
    padding: 16,
  },
  title: {
    fontSize: 38,
    color: "white",
    fontWeight: "300",
    marginTop: 20,
  },

  button: {
    backgroundColor: "#fff4aa",
    width: "50%",
    marginTop: 20,
  },
});

export default App;
