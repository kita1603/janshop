import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./searchTile.style";
import { useNavigation } from "@react-navigation/native";


const SearchTile = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} 
        onPress={() => navigation.navigate("ProductDetails", {item})}>
            <View style={styles.image}>
                <Image
                    source={{uri: item.imageUrl}}
                    style={styles.productImg}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </TouchableOpacity>



    )
}

export default SearchTile