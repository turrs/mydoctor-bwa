import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILSplash } from "./assets";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./router";
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
const MainApp = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({});
