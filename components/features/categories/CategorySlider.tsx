import React, { useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import Carousel from "react-native-reanimated-carousel";

type CarouselMethods = {
  prev(): void;
  next(): void;
};

type CategoryImage = {
  id: string;
  image: string;
};

type CategoriesData = {
  categoryName: string;
  categoryImages: CategoryImage[];
};

const ITEM_WIDTH = 130;

const CategoryRow = ({ categories }: { categories: CategoriesData[] }) => {
  const router = useRouter();
  const carouselRefs = useRef<(CarouselMethods | null)[]>([]);

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: CategoriesData;
    index: number;
  }) => {
    return (
      <View
        style={
          index === 3
            ? styles.categoryContainer
            : [styles.categoryContainer, { marginLeft: 7 }]
        }
      >
        <Carousel
          loop
          width={ITEM_WIDTH}
          height={130}
          data={item.categoryImages.map((img) => img.image)}
          scrollAnimationDuration={500}
          ref={(ref) => (carouselRefs.current[index] = ref)}
          renderItem={({ item: image }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.navigate("/products")}
            >
              <Image
                source={{ uri: image }}
                style={styles.categoryImage}
                contentFit="cover"
              />
            </TouchableOpacity>
          )}
        />

        <Text style={styles.categoryName}>{item.categoryName}</Text>

        <View style={styles.arrowsContainer}>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => carouselRefs.current[index]?.prev()}
          >
            <Entypo name="chevron-left" size={24} color={Colors.Basic50} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => carouselRefs.current[index]?.next()}
          >
            <Entypo name="chevron-right" size={24} color={Colors.Basic50} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.categoryWrapper}>
            {renderCategoryItem({ item, index })}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  scrollContent: {
    flexDirection: "row-reverse",
  },
  categoryWrapper: {},
  categoryContainer: {
    borderRadius: 10,
    alignItems: "center",
    height: 200,
    justifyContent: "center",
    width: 140,
  },
  categoryName: {
    fontSize: 15,
    color: Colors.gold00,
    fontFamily: "Cairo-Regular",
    textAlign: "center",
    marginTop: 5,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  arrowsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 70,
    paddingHorizontal: 5,
  },
  arrowButton: {
    padding: 5,
    zIndex: 10,
  },
});

export default CategoryRow;
