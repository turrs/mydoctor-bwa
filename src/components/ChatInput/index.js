import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Isend } from "../../assets";

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"Silahkan tulis pesan untuk Ramadhan..."}
      ></TextInput>
      <View style={styles.wrapperSend}>
        <Isend style={styles.send}></Isend>
      </View>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#EDEEF0",
    borderRadius: 10,
    padding: 10,
    height: 45,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  send: {},
  wrapperSend: {
    backgroundColor: "#EDEEF0",
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
});
