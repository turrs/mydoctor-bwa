import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  GetStarted,
  Splash,
  Login,
  Register,
  UploadPhoto,
  Message,
  Doctor,
  Hospital,
  DoctorProfile,
  UserProfile,
  EditProfile,
  Chatting,
} from "../pages";
import BottomNavigator from "../components/BottomNavigator";
import Homepage from "../pages/Homepage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MainApp = (onPress) => {
  return (
    <Tab.Navigator
      onPress={onPress}
      tabBar={(props) => <BottomNavigator {...props}></BottomNavigator>}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Doctor"
        component={Doctor}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Message"
        component={Message}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Hospital"
        component={Hospital}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Homepage">
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
