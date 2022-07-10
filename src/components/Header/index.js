import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IarrowBackBlack } from "../../assets";
import Gap from "../Gap";
import DarkProfile from "./DarkProfile";
import UserProfile from "./UserProfile";

const Header = ({ title, type, onPress }) => {
  if (type === "dark-profile") {
    return <DarkProfile title={title}></DarkProfile>;
  }
  if (type === "UserProfile") {
    return <UserProfile></UserProfile>;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IarrowBackBlack></IarrowBackBlack>
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <Gap width={24}></Gap>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    color: "#112340",
  },
});
