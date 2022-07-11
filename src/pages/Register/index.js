import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { Button, Gap, Input, Loading } from "../../components";
import { useForm } from "../../utils";
import { Fire } from "../../config";
import { showMessage, hideMessage } from "react-native-flash-message";
import { getDatabase, ref, set } from "firebase/database";
const Register = ({ navigation }) => {
  const [form, setForm] = useForm({
    fullName: "",
    profession: "",
    email: "",
    password: "",
  });

  const onContinue = () => {
    console.log(form);

    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log("success bro : ", user);
        const db = getDatabase();
        set(ref(db, "users/" + user.uid + "/"), {
          username: form.fullName,
          email: form.email,
          profession: form.profession,
        });
        setLoading(false);
        setForm("reset");
        showMessage({
          message: user,
          type: "info",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("eror register : ", errorMessage);

        setLoading(false);
        showMessage({
          message: errorMessage,
          type: "danger",
        });
      });
  };
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Header
          title="Daftar Akun"
          onPress={() => navigation.goBack()}
        ></Header>
      </View>
      <View style={styles.Input}>
        <Input
          name="Full Name"
          value={form.fullName}
          onChangeText={(value) => setForm("fullName", value)}
        ></Input>
        <Input
          name="Email Adress"
          value={form.email}
          onChangeText={(value) => setForm("email", value)}
        ></Input>
        <Input
          name="Pekerjaan"
          value={form.pekerjaan}
          onChangeText={(value) => setForm("pekerjaan", value)}
        ></Input>
        <Input
          name="Password"
          value={form.password}
          onChangeText={(value) => setForm("password", value)}
          secureTextEntry={false}
          multiline={true}
        ></Input>
        <Gap height={40}></Gap>
        <Button title="Continue" type="secondary" onPress={onContinue}></Button>
      </View>
      {loading && <Loading></Loading>}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Input: {
    padding: 30,
  },
});
