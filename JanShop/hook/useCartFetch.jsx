// useCart.js
import { useState, useEffect } from "react";
import axios from 'axios';

const useCart = (userId) => {
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCartData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`http://localhost:3000/api/carts/find/${userId}`);
      setCartData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, [userId]);

  const refetchCart = () => {
    setIsLoading(true);
    fetchCartData();
  };

  return { cartData, isLoading, error, refetchCart };
};

export default useCart;
