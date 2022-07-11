import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { ListDoctor } from "../../components";

const Doctor = () => {
  return (
    <View style={styles.content}>
      <Header type="dark-profile" title="Pilih Doctor"></Header>
      <View style={styles.container}>
        <View style={styles.list}>
          <ScrollView>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
            <ListDoctor></ListDoctor>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  container: {
    flex: 1,
    backgroundColor: "#112340",
  },
  list: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
