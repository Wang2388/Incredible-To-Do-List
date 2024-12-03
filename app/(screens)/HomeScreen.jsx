import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoForm from "../../components/ToDoForm";
import ToDoList from "../../components/ToDoList";
import HandleButton from "../../components/HandleButton";
import { router } from "expo-router";

function App() {
  const [itemList, setItemList] = useState([
    { task: "Do laundry" },
    { task: "Go to gym" },
    { task: "Walk dog" },
  ]);

  const [inputText, setInputText] = useState("");

  const pressButton = () => {
    if (inputText.trim() !== "") {
      const newItem = { task: inputText };
      setItemList([...itemList, newItem]);
      setInputText("");
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ToDoForm
        value={inputText}
        handleChangeText={setInputText}
        handlePress={pressButton}
      />
      <ToDoList itemList={itemList} setItemList={setItemList} />

      <HandleButton
        title="Go to About"
        isLoading={false}
        handlePress={() => {
          router.push("AboutScreen");
        }}
        containerStyle={styles.button}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  Container: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#fff4aa",
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
  },
});
