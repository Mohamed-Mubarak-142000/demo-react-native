import React from "react";
import { View } from "react-native";
import OneProduct from "./OneProduct";

const ListProducts = ({ data }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {data.map((item) => {
        return <OneProduct item={item} key={item.id} />;
      })}
    </View>
  );
};

export default ListProducts;
