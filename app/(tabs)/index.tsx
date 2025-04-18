import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@/components/features/slider/Slider';
import ScreenContainer from '@/components/layouts/ScreenContainer';
import Categories from '@/components/features/categories/Categories';

export default function HomeScreen() {
  return (
    <ScreenContainer title="الصفحة الرئيسية">
      <View style={styles.sliderContainer}>
        <Slider />
      </View>
      
      <Categories />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    marginBottom: 20,
  },
});