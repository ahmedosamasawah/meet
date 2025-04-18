import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function FilterButton() {
  return (
    <View style={styles.con}>
      <TouchableOpacity style={styles.filterBtnContainer} activeOpacity={0.4}>
        <Text style={styles.filterBtnText}>تصفيه</Text>
        <MaterialCommunityIcons
          name="tune-vertical"
          size={15}
          color={Colors.Black00}
        />{" "}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  con: { justifyContent: "center", alignItems: "center" },
  filterBtnContainer: {
    backgroundColor: Colors.gold00,
    flexDirection: "row",
    width: 115,
    height: 34,
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderRadius: 10,
  },
  filterBtnText: {
    fontFamily: "Cairo-Regular",
    color: Colors.Black00,
  },
});
