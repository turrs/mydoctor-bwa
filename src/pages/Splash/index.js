import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { ILSplash } from "../../assets/ilustration";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          navigation.replace("MainApp");
          // ...
        } else {
          // User is signed out
          // ...
          navigation.replace("GetStarted");
        }
      });
    }, 3000);
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ILSplash></ILSplash>
      <Text style={{ padding: 15, fontSize: 20, color: "#112340" }}>
        My Doctor
      </Text>
    </View>
  );
};

export default Splash;
