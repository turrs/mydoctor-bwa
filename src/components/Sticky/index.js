import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Sticky = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {name}</Text>
    </View>
  );
};

export default Sticky;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#7D8797",
  },
  container: {
    padding: 5,
  },
});
