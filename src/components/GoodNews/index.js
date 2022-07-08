import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pdummy } from "../../assets";

const GoodNews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperText}>
        <Text style={styles.headline}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.time}>Today</Text>
      </View>
      <Image source={Pdummy} style={styles.image}></Image>
    </View>
  );
};

export default GoodNews;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
  wrapperText: {
    alignSelf: "center",
  },
  headline: {
    color: "#112340",
    fontSize: 16,
    fontWeight: "400",
    maxWidth: "80%",
  },
  time: {
    color: "#7D8797",
    fontSize: 12,
    padding: 5,
    paddingLeft: 0,
  },
});
