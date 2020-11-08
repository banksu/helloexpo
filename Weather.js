import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
  Atmosphere: {
    iconName: "weather-windy",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
  Dust: {
    iconName: "weather-cloudy-alert",
    gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    // <LinearGradient
    //   colors={weatherOption[condition].gradient}
    //   style={style.container}
    // >
    
    <StatusBar barStyle="light-content" />
    <View style={style.halfContainer}>
    {/* <MaterialCommunityIcons
      name={weatherOption[condition].iconName}
      size={80}
      color="white"
    /> */}
        <Text style={style.temp}>{temp} ℃</Text>
      </View>
      <View style={style.halfContainer}></View>
    //</LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 30,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
