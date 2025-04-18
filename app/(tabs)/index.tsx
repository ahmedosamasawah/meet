import Categories from "@/components/Categories";
import Header from "@/components/ui/Header";
import Slider from "@/components/imageSlider/Slider";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <ScrollView style={styles.homeContainer}>
        {/* slider */}
        <View style={{ direction: "ltr" }}>
          <Slider />
        </View>

        {/* categories */}
        <Categories />
      </ScrollView>
      {/* header (trick 😍) */}
      <Header title="الصفحة الرئيسية" />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: 70,
    backgroundColor: "#fff",
    
  },
});
