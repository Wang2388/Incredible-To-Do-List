import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ToDoItem = ({ task }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsCompleted(!isCompleted)}>
        <View style={[styles.list, isCompleted ? styles.completed : null]}>
          <Text style={styles.listText}>
            {task} {isCompleted ? "Done" : ""}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ToDoList = ({ itemList, setItemList }) => {
  const addItem = (taskToAdd) => {
    setItemList((prevItems) =>
      prevItems.filter((item) => item.task !== taskToAdd)
    );
  };

  return (
    <ScrollView>
      {itemList.map((item, index) => (
        <ToDoItem key={index} task={item.task} addItem={addItem} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },

  listText: {
    fontSize: 20,
  },
});

export default ToDoList;
