import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { Button, Gap, Input } from "../../components";
import { useForm } from "../../utils";
import { Fire } from "../../config";

const Register = ({ navigation }) => {
  const [form, setForm] = useForm({
    fullName: "",
    profession: "",
    email: "",
    password: "",
  });
  const onContinue = () => {
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("success bro : ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("eror register : ", errorMessage);
      });
    console.log("wasu");
  };

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
          onChangeText={(value) => setForm("pekerjaan", value)}
          secureTextEntry={false}
          multiline={true}
        ></Input>
        <Gap height={40}></Gap>
        <Button title="Continue" type="secondary" onPress={onContinue}></Button>
      </View>
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
    padding: 40,
  },
});
