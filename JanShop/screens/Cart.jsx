import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import styles from './cart.style'; // Import your cart styles
import { COLORS } from '../constants';
import axios from 'axios';

const Cart = ({ route }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    try {
      const id = await AsyncStorage.getItem('id');

      if (id !== null) {
        const userId = 'user' + JSON.parse(id);
        const currentUser = await AsyncStorage.getItem(userId);

        if (currentUser !== null) {
          const parsedData = JSON.parse(currentUser);
          setUserData(parsedData);
          setUserLogin(true);
          fetchCartData(userId);
        }
      }
    } catch (error) {
      console.log('Error retrieving the data: ', error);
    }
  };
  
  const fetchCartData = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      const userId = id.replace(/"/g, '');
      const response = await axios.get('http://localhost:3000/api/carts/find/' + userId);
      
      if (response.data && response.data.length > 0 && response.data[0].products) {
        setCartData(response.data);

        // total amount
        const totalAmount = response.data[0].products.reduce((total, item) => {
          const priceString = item.cartItem.price.replace('$', '');  
          const price = parseFloat(priceString);
          const quantity = parseFloat(item.quantity);
          return total + price * quantity;
        }, 0);
        setTotalAmount(totalAmount);
      } else {

      }
    } catch (error) {

    }
  };

//update quantity
const updateCartItemQuantity = async (cartItemId, newQuantity) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/carts/quantity`, {
      userId: userData._id,
      cartItem: cartItemId,
      quantity: newQuantity,
    });

    if (response.status === 200) {
      fetchCartData(userData._id);
    }
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
  }
};

const modifyQuantity = (cartItemId, currentQuantity, action) => {
  let newQuantity;

  if (action === 'increment') {
    newQuantity = currentQuantity + 1;
  } else if (action === 'decrement' && currentQuantity > 1) {
    newQuantity = currentQuantity - 1;
  } else {
    return; // No change needed
  }

  // Update the quantity
  updateCartItemQuantity(cartItemId, newQuantity);
};
//update quantity


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <Text style={styles.heading}>Your Cart</Text>
      </View>
      {cartData.length === 0 ? (
        <Text style={{ marginHorizontal: 20, marginTop: 60 }}>Your cart is empty</Text>
      ) : (
        <FlatList
          style={{marginVertical: 60, marginHorizontal: 20}}
          data={cartData[0].products}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.cartItem.imageUrl }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>{item.cartItem.title}</Text>
                <Text style={styles.productPrice}>{item.cartItem.price}</Text>
                <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
              </View>
            </View>
          )}
        />
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Amount: ${totalAmount.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => {
          // Add your checkout logic here
          Alert.alert('Checkout', 'Checkout successfully');
        }}
      >
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
