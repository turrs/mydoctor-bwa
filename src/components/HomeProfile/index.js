import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  props,
} from "react-native";
import React from "react";
import { IuserPic } from "../../assets";
import { getAuth } from "firebase/auth";
const HomeProfile = ({ navigation, onPress, dataProfile }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    console.log(user);
  } else {
    // No user is signed in.
  }
  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={onPress}>
        <Image source={IuserPic} style={styles.image}></Image>
        <View style={styles.headerWrapper}>
          <Text style={styles.name}>{dataProfile.fullName}</Text>
          <Text style={styles.job}>{dataProfile.profession}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
  },
  headerWrapper: {
    paddingLeft: 10,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
  },
  name: {
    color: "#112340",
    fontSize: 16,
  },
  job: {
    color: "#7D8797",
    fontSize: 12,
  },
});
