import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CategorySlider from "./CategorySlider";
import { Colors } from "../../../constants/Colors";
import { dummyCategories } from "./dummy-categories";

export default function Categories() {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.title}>أصنافنا</Text>
      <CategorySlider categories={dummyCategories} />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    width: "90%",
    margin: "auto",
    marginTop: 10,
    paddingBottom: 50,
  },
  title: {
    fontSize: 18,
    fontFamily: "Cairo-Bold",
    color: Colors.gold00,
    direction: "rtl",
  },
});
