// FavoriteTile.jsx
import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./favoritesTile.style";

const FavoriteTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.image}>
        <Image source={{ uri: item.imageUrl }} style={styles.productImg} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteTile;
