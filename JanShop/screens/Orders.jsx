// Orders.jsx
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, SafeAreaView, Image, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { Button, BackBtn } from '../components';
import styles from './orders.style';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().min(10, 'Invalid phone number').required('Required'),
  address: Yup.string().min(5, 'Invalid address').required('Required'),
  paymentMethod: Yup.string().required('Required'),
});

const Orders = ({ navigation }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cash');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView style={{ marginHorizontal: 20 }}>
          <View>
            <BackBtn onPress={() => navigation.goBack()} />
            {/* Add your header or image if needed */}
            {/* <Image source={require('../assets/images/header.png')} style={styles.headerImage} /> */}

            <Formik
              initialValues={{ phoneNumber: '', address: '', paymentMethod: 'cash' }}
              validationSchema={validationSchema}
              onSubmit={(values, {resetForm}) => {
                // Handle form submission here
                console.log('Form Values:', values);
                Alert.alert('Order Placed', 'Your order has been placed successfully!', [
                    {
                      text: 'OK',
                      onPress: () => {
                        resetForm(); // Reset the form after successful order placement
                      },
                    },
                  ]);
              }}
            >
              {({ handleChange, handleBlur, touched, handleSubmit, values, errors, isValid, setFieldTouched }) => (
                <View>
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Phone Number</Text>
                    <View style={styles.inputWrapper(touched.phoneNumber ? COLORS.secondary : COLORS.offwhite)}>
                      <Ionicons name="ios-call-outline" size={20} color={COLORS.gray} style={styles.iconStyle} />

                      <TextInput
                        placeholder="Enter Phone Number"
                        onFocus={() => {
                          setFieldTouched('phoneNumber');
                        }}
                        onBlur={() => {
                          setFieldTouched('phoneNumber', '');
                        }}
                        value={values.phoneNumber}
                        onChangeText={handleChange('phoneNumber')}
                        keyboardType="phone-pad"
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.phoneNumber && errors.phoneNumber && (
                      <Text style={styles.errorMessage}>{errors.phoneNumber}</Text>
                    )}
                  </View>

                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Address</Text>
                    <View style={styles.inputWrapper(touched.address ? COLORS.secondary : COLORS.offwhite)}>
                      <Ionicons name="location-outline" size={20} color={COLORS.gray} style={styles.iconStyle} />

                      <TextInput
                        placeholder="Enter Address"
                        onFocus={() => {
                          setFieldTouched('address');
                        }}
                        onBlur={() => {
                          setFieldTouched('address', '');
                        }}
                        value={values.address}
                        onChangeText={handleChange('address')}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.address && errors.address && <Text style={styles.errorMessage}>{errors.address}</Text>}
                  </View>

                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Payment Method</Text>
                    <View style={styles.paymentMethodWrapper}>
                      <TouchableOpacity
                        style={[
                          styles.paymentMethodButton,
                          selectedPaymentMethod === 'cash' && { backgroundColor: COLORS.primary },
                        ]}
                        onPress={() => {
                          setFieldTouched('paymentMethod');
                          setSelectedPaymentMethod('cash');
                          handleChange('paymentMethod')('cash');
                        }}
                      >
                        <Text style={[styles.paymentMethodText, selectedPaymentMethod === 'cash' && { color: COLORS.white }]}>Cash</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[
                          styles.paymentMethodButton,
                          selectedPaymentMethod === 'card' && { backgroundColor: COLORS.primary },
                        ]}
                        onPress={() => {
                          setFieldTouched('paymentMethod');
                          setSelectedPaymentMethod('card');
                          handleChange('paymentMethod')('card');
                        }}
                      >
                        <Text style={[styles.paymentMethodText, selectedPaymentMethod === 'card' && { color: COLORS.white }]}>Card</Text>
                      </TouchableOpacity>
                    </View>
                    {touched.paymentMethod && errors.paymentMethod && (
                      <Text style={styles.errorMessage}>{errors.paymentMethod}</Text>
                    )}
                  </View>

                  <Button title={'P L A C E  O R D E R'} onPress={isValid ? handleSubmit : () => Alert.alert('Invalid Form', 'Please provide all required fields')} />
                </View>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Orders;
