import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IactiveMessage, Iuser_account } from "../../assets";

const FieldUser = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Iuser_account></Iuser_account>
        <View style={styles.content}>
          <Text style={styles.action}>Edit Profile</Text>
          <Text style={styles.field}>Last updated yesterday</Text>
        </View>
        <IactiveMessage></IactiveMessage>
      </TouchableOpacity>
    </View>
  );
};

export default FieldUser;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 2,
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
  action: {
    color: "#112340",
    fontSize: 16,
  },
  field: {
    color: "#7D8797",
    fontSize: 12,
  },
  icon: {
    alignSelf: "center",
  },
});
