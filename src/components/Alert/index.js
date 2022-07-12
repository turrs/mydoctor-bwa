import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

const Alert = ({alert}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{alert}</Text>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.alert,
    height: 43,
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
});
