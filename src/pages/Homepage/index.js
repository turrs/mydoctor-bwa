import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChoiceDoctor, GoodNews, HomeProfile } from "../../components";
import TopRate from "../../components/TopRate";

const Homepage = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <Text style={styles.text}>Mau konsultasi dengan siapa hari ini ?</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.choice}>
            <ChoiceDoctor></ChoiceDoctor>
            <ChoiceDoctor></ChoiceDoctor>
            <ChoiceDoctor></ChoiceDoctor>
            <ChoiceDoctor></ChoiceDoctor>
          </View>
        </ScrollView>
      </View>
      <View style={styles.wrapperTopRate}>
        <Text style={styles.topRateText}>Top Rated Doctors</Text>
        <TopRate></TopRate>
        <TopRate></TopRate>
        <TopRate></TopRate>
        <TopRate></TopRate>
      </View>
      <View style={styles.wrapperGoodNews}>
        <Text style={styles.newsText}>Good News</Text>
        <GoodNews></GoodNews>
        <GoodNews></GoodNews>
        <GoodNews></GoodNews>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    color: "#112340",
    fontSize: 20,
    maxWidth: "70%",
    paddingTop: 15,
    paddingBottom: 10,
  },

  choice: {
    flexDirection: "row",
  },
  topRateText: {
    color: "#112340",
    fontSize: 16,
    paddingBottom: 10,
  },
  newsText: {
    color: "#112340",
    fontSize: 16,
    paddingBottom: 10,
  },
  wrapperTopRate: {
    paddingTop: 10,
  },
  wrapperGoodNews: {
    paddingTop: 15,
  },
});
