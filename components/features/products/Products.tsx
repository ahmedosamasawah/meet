import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Image } from "expo-image";
import Svg, { Path } from "react-native-svg";
import Entypo from "@expo/vector-icons/Entypo";
import { dummyProducts } from "./dummy-products";
import { Colors } from "../../../constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function OurProducts() {
  function addToCart() {}

  const [favorites, setFavorites] = useState<number[]>([]);
  function addToFavorite(id: number) {
    if (favorites.includes(id))
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    else setFavorites([...favorites, id]);
  }

  return (
    <View style={styles.productsContainer}>
      {dummyProducts.map((product) => (
        <View key={product.id} style={styles.productItem}>
          <Image
            source={require("@/assets/images/product-meat.png")}
            style={{ width: "100%", height: 150, borderRadius: 10 }}
            contentFit="cover"
          />

          <View style={styles.favorites}>
            <View style={styles.discount}>
              <Text style={styles.discountText}>{product.discount}</Text>
            </View>
            <TouchableOpacity onPress={() => addToFavorite(product.id)}>
              <MaterialIcons
                name={
                  favorites.includes(product.id)
                    ? "favorite"
                    : "favorite-outline"
                }
                size={22}
                color={Colors.Red00}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.productName}>{product.name}</Text>

          <View style={styles.weightContainer}>
            <Image
              source={require("@/assets/images/country.png")}
              style={{ width: 20, height: 10 }}
            />
            <View style={styles.weightNumberContainer}>
              <Text style={styles.weightText}>
                {product.weight} <Text>كجم</Text>
              </Text>
              <View style={styles.chevronContainer}>
                <Entypo name="chevron-down" size={18} color={Colors.Black00} />
              </View>
            </View>
          </View>
          {/* prices */}
          <View style={styles.prices}>
            <View style={styles.price}>
              <Svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                <Path
                  d="M5.60132 9.35887C5.44072 9.7129 5.33456 10.0971 5.29389 10.5L8.69256 9.78175C8.85317 9.4278 8.95925 9.04353 9 8.64063L5.60132 9.35887Z"
                  fill={Colors.Black30}
                />
                <Path
                  d="M8.69256 7.62995C8.85317 7.276 8.95933 6.89172 9 6.48882L6.35254 7.0486V5.9725L8.69248 5.47815C8.85309 5.1242 8.95925 4.73992 8.99992 4.33702L6.35246 4.89633V1.02635C5.94679 1.25279 5.58651 1.55421 5.29365 1.90975V5.12014L4.23484 5.34388V0.5C3.82917 0.726363 3.46889 1.02786 3.17603 1.3834V5.56753L0.806937 6.06802C0.646334 6.42197 0.540093 6.80624 0.499342 7.20914L3.17603 6.64363V7.99879L0.307435 8.60481C0.146832 8.95876 0.0406711 9.34303 0 9.74593L3.00262 9.11158C3.24704 9.06104 3.45712 8.91737 3.59371 8.71966L4.14437 7.90805C4.20153 7.82408 4.23484 7.72268 4.23484 7.61363V6.4199L5.29365 6.19616V8.34836L8.69256 7.62995Z"
                  fill={Colors.Black30}
                />
              </Svg>
              <Text style={styles.oldPriceNum}>{product.oldPrice}</Text>
            </View>
            <View style={styles.price}>
              <Svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                <Path
                  d="M5.60132 9.35887C5.44072 9.7129 5.33456 10.0971 5.29389 10.5L8.69256 9.78175C8.85317 9.4278 8.95925 9.04353 9 8.64063L5.60132 9.35887Z"
                  fill={Colors.Red00}
                />
                <Path
                  d="M8.69256 7.62995C8.85317 7.276 8.95933 6.89172 9 6.48882L6.35254 7.0486V5.9725L8.69248 5.47815C8.85309 5.1242 8.95925 4.73992 8.99992 4.33702L6.35246 4.89633V1.02635C5.94679 1.25279 5.58651 1.55421 5.29365 1.90975V5.12014L4.23484 5.34388V0.5C3.82917 0.726363 3.46889 1.02786 3.17603 1.3834V5.56753L0.806937 6.06802C0.646334 6.42197 0.540093 6.80624 0.499342 7.20914L3.17603 6.64363V7.99879L0.307435 8.60481C0.146832 8.95876 0.0406711 9.34303 0 9.74593L3.00262 9.11158C3.24704 9.06104 3.45712 8.91737 3.59371 8.71966L4.14437 7.90805C4.20153 7.82408 4.23484 7.72268 4.23484 7.61363V6.4199L5.29365 6.19616V8.34836L8.69256 7.62995Z"
                  fill={Colors.Red00}
                />
              </Svg>
              <Text style={styles.newPriceNum}>{product.newPrice}</Text>
            </View>
          </View>
          <View style={styles.CartIconContainer}>
            <TouchableOpacity style={styles.cartIcon} onPress={addToCart}>
              <MaterialCommunityIcons
                name="cart-plus"
                size={14}
                color={Colors.black10}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productItem: {
    backgroundColor: Colors.White10,
    width: "49%",
    marginBottom: 10,
    borderRadius: 10,
    padding: 3,
  },
  favorites: {
    position: "absolute",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    padding: 10,
  },
  discount: {
    backgroundColor: Colors.Red40,
    borderRadius: 10,
    height: 20,
    width: 45,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  discountText: {
    color: Colors.Red00,
    fontSize: 13,
    fontFamily: "Cairo-Regular",
  },
  productName: {
    fontSize: 12,
    textAlign: "center",
    marginVertical: 3,
    color: Colors.black10,
    fontFamily: "Cairo-Bold",
  },
  weightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  weightNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  weightText: {
    fontSize: 10,
    fontFamily: "Cairo-Regular",
  },
  chevronContainer: {
    backgroundColor: Colors.goldLight,
    borderRadius: 10,
  },
  prices: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  oldPriceNum: {
    color: Colors.Black30,
    textDecorationLine: "line-through",
    fontFamily: "Cairo-Regular",
  },
  newPriceNum: {
    color: Colors.Red00,
    fontFamily: "Cairo-Bold",
    fontSize: 14,
  },
  CartIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
  },
  cartIcon: {
    backgroundColor: Colors.gold00,
    padding: 6,
    borderRadius: 25,
  },
});
