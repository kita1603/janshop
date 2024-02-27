// orders.style.js
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
    marginTop: 50, // Adjusted marginTop to add space between Back button and the form
  },
  inputWrapper: (borderColor) => ({
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: borderColor,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 8,
  }),
  iconStyle: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: COLORS.black,
  },
  errorMessage: {
    color: COLORS.red,
    fontSize: 12,
    marginTop: 5,
  },
  paymentMethodWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  paymentMethodButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  paymentMethodText: {
    fontSize: 16,
    color: COLORS.black,
  },
});

export default styles;
