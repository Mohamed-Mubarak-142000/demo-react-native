import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Box = ({ children, styling }) => {
  return (
    <View style={[styles.container, styling]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
    height: "100px",
    gap: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  boxShadow: {
    shadowColor: "#333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Box;
