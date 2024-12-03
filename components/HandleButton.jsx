import React from "react";
import { Text, TouchableOpacity } from "react-native";

const HandleButton = ({ title, handlePress, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        {
          borderRadius: 10,
          minHeight: 50,
          justifyContent: "center",
          alignItems: "center",
        },
        containerStyle,
      ]}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HandleButton;
