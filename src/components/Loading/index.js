import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={colors.secondary}
      ></ActivityIndicator>
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0,5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  text: {
    color: colors.secondary,
  },
});
