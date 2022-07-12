import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import { ILSplash } from "../../assets";
import {
  AlertNotif,
  Button,
  Gap,
  Input,
  Link,
  Loading,
} from "../../components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "../../utils";
import { showMessage } from "react-native-flash-message";

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    console.log(form);
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("sukses nih login user : ", user);
        showMessage({
          message: "sukses login",
          type: "info",
        });
        setLoading(false);
        navigation.replace("MainApp");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("eror ni bosku : ", errorMessage);
        showMessage({
          message: errorMessage,
          type: "danger",
        });
        setLoading(false);
      });
  };
  return (
    <View style={{ flex: 1 }}>
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
          <Input
            onChangeText={(value) => setForm("email", value)}
            name="Email Adress"
            value={form.email}
          />
          <Gap height={10}></Gap>
          <Input
            onChangeText={(value) => setForm("password", value)}
            name="Password"
            type="password"
            value={form.password}
          />
          <Gap height={5}></Gap>
          <Link text="Forgot my password"></Link>
        </View>
        <Gap height={30}></Gap>
        <View>
          <Button title="Sign In" type="secondary" onPress={onSubmit} />
          <Gap height={16} width={20}></Gap>
          <View style={{ alignItems: "center" }}>
            <Link
              text="Create new account"
              onPress={() => navigation.navigate("Register")}
            ></Link>
          </View>
        </View>
      </View>
      {loading && <Loading></Loading>}
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
