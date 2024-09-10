import { ImageBackground, Text } from "react-native";
const HeroImage = require("../../assets/hero.png");
export default function Hero() {
  return (
    <ImageBackground
      source={HeroImage}
      style={{
        width: "100%",
        height: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "green",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          textShadowColor: "black",
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 5,
          textTransform: "uppercase",
        }}
      >
        Welcome to React Native
      </Text>
    </ImageBackground>
  );
}
