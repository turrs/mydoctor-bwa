import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ChatInput, ChatItem, Header } from "../../components";

const Chatting = () => {
  return (
    <View style={styles.page}>
      <Header type="UserProfile"></Header>
      <View style={styles.container}>
        <View>
          <ChatItem></ChatItem>
          <ChatItem isMe></ChatItem>
        </View>
      </View>
      <View style={styles.wrapperInput}>
        <ChatInput></ChatInput>
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapperInput: {
    padding: 20,
  },
});
