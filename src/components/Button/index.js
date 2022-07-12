import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import disableButton from "./disableButton";
const Button = ({ title, type, onPress, disable }) => {
  if (disable) {
    return (
      <View style={styles.disableContainer}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(type)}>
        <Text style={styles.text(type)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === "secondary" ? "#0BCAD4" : "#ffffff",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
  }),
  text: (type) => ({
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    color: type === "secondary" ? "#ffffff" : "#112340",
  }),
  disableContainer: {
    backgroundColor: "#EDEEF0",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
  },
  disableText: {
    color: "#B1B7C2",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
  },
});
export default Button;
