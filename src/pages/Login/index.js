import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import { ILSplash } from "../../assets";
import { AlertNotif, Button, Gap, Input, Link } from "../../components";

const Login = ({ navigation }) => {
  const onSubmit = () => {
    console.log(value);
  };
  return (
    <View style={{ flex: 1 }}>
      <AlertNotif></AlertNotif>
      <View style={{ flex: 1, padding: 40 }}>
        <View>
          <ILSplash></ILSplash>
        </View>
        <Gap height={30}></Gap>
        <View>
          <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
        </View>
        <Gap height={30}></Gap>
        <View>
          <Input name="Email Adress" />
          <Gap height={10}></Gap>
          <Input name="Password" type="password" />
          <Gap height={5}></Gap>
          <Link text="Forgot my password"></Link>
        </View>
        <Gap height={30}></Gap>
        <View>
          <Button title="Sign In" type="secondary" onPress={onSubmit} />
          <Gap height={16} width={20}></Gap>
          <View style={{ alignItems: "center" }}>
            <Link text="Create new account"></Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width: 155,
  },
});
