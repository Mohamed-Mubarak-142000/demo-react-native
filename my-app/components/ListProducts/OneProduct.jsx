import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "./../custumButtons/CustomButton.ios";

const OneProduct = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* Directly pass the image source */}
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="cover"
        accessibilityLabel={`${item.name} product`}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <CustomButton
        style={{ marginTop: 10, width: "100%" }}
        title="Add to cart"
        onPress={() => {
          alert("Added to cart");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    minHeight: 200,
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5,
  },
});

export default OneProduct;
