import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";
import Header from "@/components/common/Header";
import { Theme } from "@/constants/Theme";

type ScreenContainerProps = {
  children: React.ReactNode;
  title?: string;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
  headerShown?: boolean;
};

export default function ScreenContainer({
  children,
  title,
  scroll = true,
  style,
  headerShown = true,
}: ScreenContainerProps) {
  const Container = scroll ? ScrollView : View;

  return (
    <View style={styles.container}>
      {headerShown && title && <Header title={title} />}

      <Container
        style={[styles.content, headerShown ? styles.withHeader : null, style]}
        contentContainerStyle={scroll ? styles.scrollContent : undefined}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  withHeader: {
    paddingTop: 80, // Account for the header
  },
  scrollContent: {
    paddingHorizontal: Theme.spacing.md,
    paddingBottom: Theme.spacing.xl,
  },
});
