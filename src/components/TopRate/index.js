import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Idoctor, Istars, IuserPic } from "../../assets";
import { colors } from "../../utils";

const TopRate = () => {
  return (
    <View style={styles.container}>
      <Image source={IuserPic} style={styles.image}></Image>
      <View style={styles.content}>
        <View style={styles.wrapperText}>
          <Text style={styles.name}>Alexa Rachel</Text>
          <Text style={styles.type}>Dentist</Text>
        </View>
        <View style={styles.wrapperStars}>
          <Istars></Istars>
          <Istars></Istars>
          <Istars></Istars>
          <Istars></Istars>
          <Istars></Istars>
        </View>
      </View>
    </View>
  );
};

export default TopRate;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  container: {
    flexDirection: "row",
    paddingTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  wrapperStars: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperText: {
    justifyContent: "center",
  },
  name: {
    color: "#112340",
    fontSize: 16,
    fontWeight: "bold",
  },
  type: {
    color: "#7D8797",
    fontSize: 12,
  },
});
