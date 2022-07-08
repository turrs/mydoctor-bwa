import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { IactiveMessage, IuserPic } from "../../assets";

const ListDoctor = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IuserPic}></Image>
      <View style={styles.content}>
        <Text style={styles.name}>Ramadhan Malinta</Text>
        <Text style={styles.gender}>Pria</Text>
      </View>
      <IactiveMessage style={styles.icon}></IactiveMessage>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0,
    borderColor: "#EEEEEE",
    padding: 10,
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "column",
    paddingLeft: 20,
    alignSelf: "center",
    paddingLeft: 14,
    flex: 1,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    color: "#112340",
    fontSize: 16,
  },
  gender: {
    color: "#7D8797",
    fontSize: 12,
  },
  icon: {
    alignSelf: "center",
  },
});
