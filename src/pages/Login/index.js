import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILSplash } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = ({ navigation }) => {
  return (
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
        <Input name="Password" />
        <Gap height={5}></Gap>
        <Link text="Forgot my password"></Link>
      </View>
      <Gap height={30}></Gap>
      <View>
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.replace("MainApp")}
        />
        <Gap height={16} width={20}></Gap>
        <View style={{ alignItems: "center" }}>
          <Link text="Create new account"></Link>
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
