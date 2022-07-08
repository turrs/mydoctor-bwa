import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IuserPic } from "../../assets";

const HomeProfile = () => {
  return (
    <View style={styles.header}>
      <Image source={IuserPic} style={styles.image}></Image>
      <View style={styles.headerWrapper}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.job}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
  },
  headerWrapper: {
    paddingLeft: 10,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
  },
  name: {
    color: "#112340",
    fontSize: 16,
  },
  job: {
    color: "#7D8797",
    fontSize: 12,
  },
});
