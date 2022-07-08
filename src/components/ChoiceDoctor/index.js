import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IdoctorUmum } from "../../assets";

const ChoiceDoctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.card}>
        <View style={styles.image}>
          <IdoctorUmum></IdoctorUmum>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.text}>Saya butuh </Text>
          <Text style={styles.textDoctor}>dokter umum</Text>
        </View>
      </View>
    </View>
  );
};

export default ChoiceDoctor;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "#112340",
  },
  textDoctor: {
    color: "#112340",
    fontWeight: "bold",
    fontSize: 12,
  },
  wrapperText: {
    paddingBottom: 10,
    paddingLeft: 10,
  },
  image: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  card: {
    justifyContent: "space-between",
    width: 100,
    height: 130,
    borderRadius: 10,
    backgroundColor: "#EDFCFD",
  },
  page: {
    padding: 10,
    paddingLeft: 0,
  },
});
