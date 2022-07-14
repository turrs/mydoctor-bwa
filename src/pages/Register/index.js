import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { Button, Gap, Input, Loading } from "../../components";
import { storeData, useForm } from "../../utils";
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
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        // Signed in

        setForm("reset");
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: userCredential.user.uid,
        };
        console.log(data);
        const db = getDatabase();
        set(ref(db, "users/" + data.uid), {
          fullName: data.fullName,
          email: data.email,
          profession: data.profession,
          uid: data.uid,
        });
        storeData("user", data);
        navigation.navigate("UploadPhoto", data);
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
          value={form.profession}
          onChangeText={(value) => setForm("profession", value)}
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
