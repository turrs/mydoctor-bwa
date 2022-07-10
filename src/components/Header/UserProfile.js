import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IarrowBackBlack, IarrowBackWhite, IuserPic } from "../../assets";
import Gap from "../Gap";

const UserProfile = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={onPress}>
          <IarrowBackWhite></IarrowBackWhite>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.name}>Ramadhan Malinta</Text>
          <Text style={styles.type}>Dokter Gigi</Text>
        </View>
        <Image style={styles.image} source={IuserPic}></Image>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#112340",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  name: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  content: {
    flexDirection: "column",
  },
  image: {
    width: 46,
    height: 46,
  },
  type: {
    textAlign: "center",
    fontSize: 14,
    color: "#8092AF",
  },
});
