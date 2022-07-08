import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Others = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chat}>
        <Text style={styles.chatText}>Othewadawdwadawrs</Text>
      </View>
      <View style={styles.time}>
        <Text style={styles.timeText}>05.00 AM</Text>
      </View>
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
  },
  chat: {
    backgroundColor: "#EDFCFD",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  time: {
    alignSelf: "flex-end",
  },
  timeText: {
    color: "#7D8797",
    fontSize: 11,
  },
  chatText: {
    color: "#112340",
    fontSize: 14,
  },
});
