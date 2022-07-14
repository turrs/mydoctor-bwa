import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { Button, Gap, Header, Link } from "../../components";
import { IaddPhoto, IphotoNull, IcancelPhoto, Pdummy } from "../../assets";
import { colors } from "../../utils";
import { showMessage, hideMessage } from "react-native-flash-message";
import { getStorage, ref } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
const UploadPhoto = ({ route, navigation }) => {
  const { fullName, profession, uid } = route.params;
  const [photoForDB, setPhotoForDB] = useState("");
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(true);
  console.log(setPhoto);
  console.log("iniroute", route);
  const takePhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then((response) => {
      if (response.cancelled || response.error) {
        showMessage("oops, sepertinya anda tidak memilih foto nya?");
      } else {
        console.log("ni response woi", response);
        const source = { uri: response.uri };
        console.log("ni source woi", source);
        setPhotoForDB(`data:${response.type};base64, ${response.data}`);
        console.log("ni photo woi", photoForDB);
        setPhoto(source);
        setHasPhoto(true);
        console.log("iniroute", route);
      }
    });
  };

  const uploadAndContinue = () => {
    const storage = getStorage();
    storage
      .ref(`/images/${source}`)
      .put(source)
      .on("state_changed", alert("success"), alert);
  };
  return (
    <View style={styles.container}>
      <Header title="Daftar Akun" />

      <View style={{ padding: 40, flex: 1 }}>
        <View style={styles.avatar}>
          <TouchableOpacity style={styles.Wrapper} onPress={takePhoto}>
            <IphotoNull style={styles.photo}></IphotoNull>
          </TouchableOpacity>
          <View onPress={takePhoto}>
            {hasPhoto && (
              <IcancelPhoto
                style={{ poisition: "absolute", bottom: 40, left: 40 }}
              ></IcancelPhoto>
            )}
            {!hasPhoto && (
              <IaddPhoto
                style={{ poisition: "absolute", bottom: 40, left: 40 }}
              ></IaddPhoto>
            )}
          </View>
          <Text style={{ color: "#112340", fontSize: 24 }}>Fatur Rahman</Text>
          <Text style={{ color: "#7D8797", fontSize: 18 }}>
            Front End Developer
          </Text>
        </View>
        <Gap height={120}></Gap>
        <Button
          title="Sign In"
          type="secondary"
          disable={!setPhoto}
          onPress={uploadAndContinue}
        />
        <Gap height={30}></Gap>
        <View>
          <View style={{ alignItems: "center" }}>
            <Link
              text="Skip for this"
              onPress={() => navigation.navigate("MainApp", route.params)}
            />
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
    borderColor: colors.borderColors,
    borderRadius: 190 / 2,
  },
  photo: {
    width: 190,
    height: 190,
  },
});
