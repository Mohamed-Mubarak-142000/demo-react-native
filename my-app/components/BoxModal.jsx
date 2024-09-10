import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxModal = ({ title, number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"Hello World"}</Text>
      <Text style={styles.textChild}>Title:{title}</Text>
      <Text style={styles.textChild}>Number:{number}</Text>
    </View>
  );
};

export default BoxModal;
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
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
  },
  textChild: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
