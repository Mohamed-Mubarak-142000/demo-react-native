import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 10,
        width: "90%",
        backgroundColor: "orange",
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
