// Slider.tsx
import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import SliderItem from "./SliderItem";
import { Colors } from "@/constants/Colors";
import { imageSlider } from "./slider-images";
import Carousel from "react-native-reanimated-carousel";

const { width: screenWidth } = Dimensions.get("window");

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.SliderContainer}>
      <Carousel
        width={screenWidth}
        height={450}
        data={imageSlider}
        autoPlay
        autoPlayInterval={3000}
        loop
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
      />
      <View style={styles.paginationContainer}>
        {imageSlider.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SliderContainer: {
    marginTop: 10,
    paddingVertical: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.goldLight,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#000",
    width: 8,
    height: 8,
    borderRadius: 6,
  },
});
