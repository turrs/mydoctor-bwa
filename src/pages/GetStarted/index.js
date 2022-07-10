import React from "react";
import { Text, View, ImageBackground, StyleSheet, props } from "react-native";
import { ILSplash, BackgroundGet } from "../../assets/ilustration";
import { Button, Gap } from "../../components";

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={BackgroundGet} style={{ flex: 1, padding: 40 }}>
      <View style={{ flex: 2 }}>
        <ILSplash></ILSplash>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.text}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <Button
          title="Get Started"
          type="secondary"
          onPress={() => navigation.navigate("Register")}
        />
        <Gap height={16} width={20}></Gap>
        <Button
          title="Sign in"
          type="primary"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: "#FFFFFF",
  },
});
