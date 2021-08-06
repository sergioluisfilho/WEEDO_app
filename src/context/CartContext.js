import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [itemsQuantity, setItemsQuantity] = useState(0);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  function calculeAmount() {
    var total = items.reduce((total, item) => {
      return item.price * item.quantity + total;
    }, 0);
    setTotalValue(total);
  }

  function calculateItemsQuantity() {
    var total = items.reduce((total, item) => total + 1 * item.quantity, 0);
    setItemsQuantity(total);
  }
  useEffect(() => {
    getData().then((data) => {
      if (data) {
        setItems(data);
      }
    });
  }, []);

  useEffect(() => {
    calculeAmount();
    storeData(items);
    calculateItemsQuantity();
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        totalValue,
        itemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  const { items, setItems, totalValue, itemsQuantity } = context;
  return { items, setItems, totalValue, itemsQuantity };
}
