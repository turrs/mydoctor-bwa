import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IuserPic, Ifemale } from "../../assets";
import Gap from "../Gap";

const Avatar = ({ type }) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={IuserPic} style={styles.image}></Image>
        </View>
        {type === "profile" && <Ifemale style={styles.gender}></Ifemale>}
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 20,
  },
  container: {
    alignItems: "center",
  },
  gender: {
    width: 40,
    poisition: "absolute",
    bottom: 40,
    left: 40,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },

  content: {
    alignItems: "center",
  },
  imageWrapper: {
    padding: 5,
    borderRadius: 160 / 2,
    borderWidth: 1,
    color: "#E9E9E9",
    borderColor: "#E9E9E9",
  },
});
