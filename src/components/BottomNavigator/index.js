import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import TabItem from "../TabItem";

const BottomNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TabItem
            title={label}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            active={isFocused}
          ></TabItem>
        );
      })}
    </View>
  );
};
export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 53,
    backgroundColor: "#112340",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
