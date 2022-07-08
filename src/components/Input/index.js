import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Sticky } from "..";

const Input = ({ name }) => {
  return (
    <View>
      <Sticky name={name}></Sticky>
      <View style={styles.container}>
        <TextInput style={styles.textInput} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#E9E9E9",
    color: "#112340",
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    padding: 10,
  },
  container: {},
});
