import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IuserPic } from "../../assets";
import Others from "./Others";

const ChatItem = ({ isMe }) => {
  if (!isMe) {
    return <Others></Others>;
  }
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.wrapperImage}>
          <Image source={IuserPic} style={styles.image}></Image>
        </View>
        <View>
          <View style={styles.wrapperChat}>
            <Text style={styles.textChat}>
              masaawdadawasdsadasdasasdsadasdwasadasasdasdasdasdasdaasdasdsih
            </Text>
          </View>
          <Text style={styles.time}>4.45 AM</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  image: {
    padding: 10,
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: "row",
  },
  wrapperChat: {
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10,
    maxWidth: "75%",
    backgroundColor: "#0BCAD4",
  },
  wrapperImage: {
    paddingRight: 10,
    justifyContent: "flex-end",
  },
  time: {
    color: "#7D8797",
    fontSize: 11,
  },
  textChat: {
    color: "white",
    fontSize: 14,
  },
});
