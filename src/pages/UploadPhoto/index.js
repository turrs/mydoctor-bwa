import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Gap, Header, Link } from "../../components";
import { IaddPhoto, IphotoNull } from "../../assets";

const UploadPhoto = () => {
  return (
    <View style={styles.container}>
      <Header title="Daftar Akun" />

      <View style={{ padding: 40, flex: 1 }}>
        <View style={styles.avatar}>
          <View style={styles.Wrapper}>
            <IphotoNull style={styles.photo}></IphotoNull>
          </View>
          <IaddPhoto
            style={{ poisition: "absolute", bottom: 40, left: 40 }}
          ></IaddPhoto>
          <Text style={{ color: "#112340", fontSize: 24 }}>Fatur Rahman</Text>
          <Text style={{ color: "#7D8797", fontSize: 18 }}>
            Front End Developer
          </Text>
        </View>
        <Gap height={120}></Gap>
        <Button title="Sign In" type="secondary" />
        <Gap height={30}></Gap>
        <View>
          <View style={{ alignItems: "center" }}>
            <Link text="Skip for this" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  avatar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,
    border: 1,
    borderWidth: 1,
    color: "#E9E9E9",
    borderRadius: 190 / 2,
  },
  photo: {
    width: 190,
    height: 190,
  },
});
