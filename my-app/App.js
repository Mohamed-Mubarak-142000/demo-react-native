import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Hero from "./components/hero/Hero";
import { useEffect, useState } from "react";
import ListProducts from "./components/ListProducts/ListProducts";

export default function App() {
  // Data for pizza shop details
  const data = [
    {
      id: 1,
      name: "Peperoni",
      image: require("./assets/image1 (1).jpeg"), // Local image
      price: 10,
    },
    {
      id: 2,
      name: "Hawaiian",
      image: require("./assets/image1 (10).jpeg"),
      price: 15,
    },
    {
      id: 3,
      name: "Meat",
      image: require("./assets/image1 (11).jpeg"),
      price: 20,
    },
    {
      id: 4,
      name: "Veggie",
      image: require("./assets/image1 (13).jpeg"),
      price: 25,
    },
    {
      id: 5,
      name: "Cheese",
      image: require("./assets/image1 (2).jpeg"),
      price: 30,
    },
    {
      id: 6,
      name: "Sausage",
      image: require("./assets/image1 (4).jpeg"),
      price: 35,
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Hero />
        <ListProducts data={data} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 30 : 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "midnightblue",
  },
  loadingText: {
    color: "white",
    fontSize: 20,
  },
});
