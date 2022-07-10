import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Gap from "../Gap";
import { IarrowBackWhite } from "../../assets";

const DarkProfile = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IarrowBackWhite></IarrowBackWhite>{" "}
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <Gap width={24}></Gap>
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: "#112340",
    flexDirection: "row",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    color: "white",
  },
});
