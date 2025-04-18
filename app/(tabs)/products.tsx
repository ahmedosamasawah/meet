import Header from "@/components/ui/Header";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OurProducts from "@/components/Products/OurProducts";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FilterButton from "@/components/ui/filterButton";

export default function Products() {
  return (
    <View style={styles.productsScreenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "90%", margin: "auto" }}
      >
        <OurProducts />
      </ScrollView>
      <Header title="منتجاتنا" />
      <FilterButton />
    </View>
  );
}

const styles = StyleSheet.create({
  productsScreenContainer: { paddingTop: 100, backgroundColor: "#fff" },
});
