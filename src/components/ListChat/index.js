import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { IactiveMessage, IuserPic } from "../../assets";
import { TouchableOpacity } from "react-native";

const ListChat = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.image} source={IuserPic}></Image>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.name}>Ramadhan Malinta</Text>
        <Text style={styles.chat}>
          Baik ibu, terima kasih banyak atas waktu...
        </Text>
      </View>
    </View>
  );
};

export default ListChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
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
  chat: {
    color: "#7D8797",
    fontSize: 12,
  },
  icon: {
    alignSelf: "center",
  },
});
