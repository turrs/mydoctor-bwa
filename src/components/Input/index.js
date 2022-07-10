import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Sticky } from "..";
import { colors } from "../../utils/colors";

const Input = ({ name, type, onChangeText }) => {
  const [borderColors, setBorderColors] = useState(colors.borderColors);

  const onFocusForm = () => {
    setBorderColors(colors.tertiary);
  };

  const onBlurForm = () => {
    setBorderColors(colors.borderColors);
  };
  return (
    <View>
      <Sticky name={name}></Sticky>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput(borderColors)}
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          onChangeText={onChangeText}
          secureTextEntry={type ? true : false}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: (borderColors) => ({
    borderColor: borderColors,
    color: "#112340",
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    padding: 10,
  }),
  container: {},
});
