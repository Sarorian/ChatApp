import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const image = require("../assets/BackgroundImage.png");

const colorOptions = [
  "#3498db", // Blue
  "#e74c3c", // Red
  "#27ae60", // Green
  "#f39c12", // Yellow
  "#9b59b6", // Purple
];

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Default to white

  const { width, height } = Dimensions.get("window");

  const handleColorSelect = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ width, height, backgroundColor }}
      >
        <View style={styles.centeredContent}>
          <Text style={styles.text}>
            Welcome to the Chat App. Please enter your name below
          </Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Type your username here"
          />
          {colorOptions.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorOption, { backgroundColor: color }]}
              onPress={() => handleColorSelect(color)}
            />
          ))}
          <TouchableOpacity
            style={styles.startButton}
            onPress={() =>
              navigation.navigate("Chat", { name, backgroundColor })
            }
          >
            <Text style={styles.startButtonText}>Go to Chat Room</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginBottom: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25, // Half the width to make it round
    margin: 5,
  },
  startButton: {
    backgroundColor: "#3498db", // Default button color
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  startButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default Start;
