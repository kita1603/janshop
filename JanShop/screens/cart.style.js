// cart.style.js

import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    paddingTop: 20,
    padding: SIZES.large, // Adjust the padding to match your design
  },
  title:{
    marginHorizontal: 20,
    fontFamily: 'bold',
    fontSize: SIZES.large,
    color: COLORS.primary,
    alignItems: 'center',
    marginBottom: SIZES.xxLarge
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: SIZES.medium, // Adjust the margin to match your design
    borderBottomWidth: 0.5,
    borderColor: COLORS.gray,
    paddingBottom: SIZES.medium, // Adjust the padding to match your design
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: SIZES.medium, // Adjust the margin to match your design
    borderRadius: SIZES.medium,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: SIZES.small, // Adjust the margin to match your design
  },
  productPrice: {
    fontSize: 14,
    color: COLORS.primary,
    marginBottom: SIZES.small, // Adjust the margin to match your design
  },
  quantity: {
    fontSize: 14,
    color: COLORS.gray,
  },
  heading: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 5,
  },
  upperRow: {
    width: SIZES.width-50,
    marginTop: 50,
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 999
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.medium,
    alignItems: 'center',
    borderRadius: SIZES.large,
    margin: SIZES.large,
  },
  checkoutButtonText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'flex-start',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
//quantity
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  quantityButton: {
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 4,
    marginRight: 5,
  },

  quantityButtonText: {
    color: COLORS.white,
    fontSize: 18,
  },

  quantityText: {
    fontSize: 16,
  },


});

export default styles;
