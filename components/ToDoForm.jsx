import { StyleSheet, Button, View, TextInput } from "react-native";
import React from "react";

const ToDoForm = ({ value, handleChangeText, handlePress }) => {
  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={value === "" ? "Add a new task..." : ""}
          value={value}
          onChangeText={handleChangeText}
        />
        <Button
          containerStyle={styles.button}
          title="Add"
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    width: "50%",
  },

  button: {
    backgroundColor: "#fff4aa",
    width: "50%",
    marginTop: 20,
  },
});
