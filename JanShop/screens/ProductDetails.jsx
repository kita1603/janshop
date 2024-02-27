import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React, {useState} from "react";
import { useRoute } from "@react-navigation/native";
import { Fontisto, MaterialCommunityIcons, SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import styles from "./productDetails.style";
import {COLORS, SIZES} from '../constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
Ionicons.loadFont();

const ProductDetails = ({navigation}) => {
    const route = useRoute();
    const {item} = route.params;
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const addToCart = async () => {
        try {
          const endpoint = "http://localhost:3000/api/carts/";
          const id = await AsyncStorage.getItem('id');
          const userId = id.replace(/"/g, '');
          const data = {
            userId: userId,
            cartItem: item._id,
            quantity: count,
          };
    
          const response = await axios.post(endpoint, data);
    
          if (response.status === 200) {
            console.log("added to cart");
          }
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name='heart' size={30} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>

            <Image 
                source={{uri: item.imageUrl,}}
                style={styles.image}
            />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View> 

                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1,2,3,4,5].map((index) => (
                            <Ionicons
                                key={index}
                                name='star'
                                size={24}
                                color={"gold"}
                            />
                        ))}
                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>

                    <View style={styles.rating}>
                       <TouchableOpacity onPress={() => decrement()}>
                            <SimpleLineIcons
                                name="minus"
                                size={20}
                            />
                       </TouchableOpacity>
                        <Text style={styles.ratingText}>{count}</Text>

                        <TouchableOpacity onPress={() => increment()}>
                            <SimpleLineIcons
                                name="plus"
                                size={20}
                            />
                       </TouchableOpacity>
                    </View>
                </View> 
            
            <View style={styles.descriptionWraper}>
                <Text style={styles.description}>Description</Text>
                <Text style={styles.descText}>
                    {item.description}
                </Text>
            </View>

            <View style={{marginBottom: SIZES.small}}>
                <View style={styles.location}>
                    <View style={{flexDirection: "row"}}>
                        <Ionicons name="location-outline" size={20}/>
                        <Text> {item.product_location} </Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
                        <Text> Free Delivery </Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.cartRow}>
                <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                    <Text style={styles.cartTitle}>BUY NOW</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={addToCart} style={styles.addCart}>
                    <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite}/>
                </TouchableOpacity>
            </View>
            
            </View>    
        </View>
    )
}

export default ProductDetails