import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Istmadyang } from "../../assets";

const ListHospital = () => {
  return (
    <View style={styles.content}>
      <Image source={Istmadyang} style={styles.image} />
      <View style={styles.profile}>
        <Text style={styles.type}>Rumah Sakit</Text>
        <Text style={styles.name}>Citra Buana</Text>
        <Text style={styles.adress}>Jl. Andi Kambo</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    padding: 20,
    borderColor: "#7D8797",
    borderBottomWidth: 1,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
  profile: {
    paddingLeft: 20,
    flex: 1,
  },
  name: {
    color: "#112340",
  },
  type: {
    color: "#112340",
  },
  adress: {
    color: "#7D8797",
    fontSize: 12,
  },
});
