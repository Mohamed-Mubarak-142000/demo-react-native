import React from "react";
import { Text, View } from "react-native";

const PrintName = ({ name }) => {
  return (
    <View>
      <Text style={{ color: "red", fontSize: 30 }}>{`Hello ${name}`}</Text>
    </View>
  );
};

export default PrintName;
