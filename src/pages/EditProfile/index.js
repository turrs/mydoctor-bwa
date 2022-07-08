import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Button, Header, Input } from "../../components";

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Header title="Edit Profile"></Header>
      <View>
        <Avatar></Avatar>
      </View>
      <View style={styles.content}>
        <View style={styles.input}>
          <Input name="Full Name"></Input>
          <Input name="Pekerjaan"></Input>
          <Input name="Email Adress"></Input>
          <Input name="Password"></Input>
        </View>
        <View style={styles.button}>
          <Button title="Save Profile" type="secondary"></Button>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  input: {},
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    padding: 40,
  },
  button: {
    paddingTop: 20,
  },
});
