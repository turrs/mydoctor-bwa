import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Button, Header } from "../../components";

const DoctorProfile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header title="Profile"></Header>
      <View style={{ padding: 20, flex: 1 }}>
        <View>
          <Avatar type="profile"></Avatar>
          <View style={styles.identity}>
            <Text style={styles.name}> Nairobi Putri Hayza</Text>
            <Text style={styles.type}> Dokter Anak</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.tag}>Alumnus</Text>
          <Text style={styles.field}>Universitas Indonesia, 2020</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.tag}>Tempat Praktik</Text>
          <Text style={styles.field}>Rumah Sakit Umum, Bandung</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.tag}>No. STR</Text>
          <Text style={styles.field}>0000116622081996</Text>
        </View>
        <View style={{ padding: 20, paddingTop: 40 }}>
          <Button title="Start Consultation" type="secondary"></Button>
        </View>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  tag: {
    color: "#7D8797",
    fontSize: 14,
  },
  field: {
    paddingTop: 5,
    color: "#112340",
    fontSize: 14,
  },
  container: {
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
  },
  identity: {
    alignItems: "center",
  },
  name: {
    color: "#112340",
    fontSize: 20,
    paddingTop: 5,
  },
  type: {
    color: "#7D8797",
    fontSize: 16,
  },
});
