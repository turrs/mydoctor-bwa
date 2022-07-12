import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Link = ({ text, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "#7D8797",
    textDecorationLine: "underline",
  },
});
