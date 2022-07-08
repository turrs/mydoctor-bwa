import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, FieldUser, Header } from "../../components";

const UserProfile = () => {
  return (
    <View style={styles.page}>
      <Header title="User Profile"> </Header>
      <View>
        <Avatar></Avatar>
        <View style={styles.identity}>
          <Text style={styles.name}> Nairobi Putri Hayza</Text>
          <Text style={styles.type}> Dokter Anak</Text>
        </View>
      </View>
      <View style={styles.container}>
        <FieldUser></FieldUser>
        <FieldUser></FieldUser>
        <FieldUser></FieldUser>
        <FieldUser></FieldUser>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  identity: {
    alignItems: "center",
  },
  name: {
    color: "#112340",
    fontSize: 20,
    paddingTop: 5,
  },
  type: {
    color: "#7D8797",
    fontSize: 16,
  },
});
