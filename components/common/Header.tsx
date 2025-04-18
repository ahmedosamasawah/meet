import React from "react";
import Points from "./Points";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Header({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View style={[styles.headerContainer]}>
      <View style={styles.headerLeft}>
        <Points />
        <Ionicons name="search-sharp" size={20} color={Colors.gold00} />
      </View>

      <View style={styles.rightNav}>
        <Pressable
          onPress={() => router.back()}
          android_ripple={{ color: Colors.rippleColor, radius: 10 }}
        >
          <AntDesign name="arrowright" size={18} color={Colors.gold00} />
        </Pressable>
        <Text style={styles.screenTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: "5%",
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#fff",
  },

  headerLeft: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 12,
  },

  rightNav: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
  },
  screenTitle: {
    fontSize: 17,
    fontFamily: "Cairo-Bold",
    color: Colors.gold00,
  },
});
