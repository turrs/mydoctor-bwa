import { StyleSheet, Text, View } from "react-native";
import React from "react";

const disableButton = () => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(type)}>
        <Text style={styles.text(type)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: () => ({
    backgroundColor: "#0BCAD4",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
  }),
  text: () => ({
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    color: "#ffffff",
  }),
});

export default disableButton;
