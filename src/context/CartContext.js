import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import products from "../utils/products";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [canCheckout, setCanCheckout] = useState(false);

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

  function calculateDiscount(item) {
    let threeProducts = Math.floor(item.quantity / 3);

    let amount = item.price * item.quantity;

    let discountPerProduct = item.price * 0.25;

    let totalDiscount = discountPerProduct * threeProducts * 3;

    return amount - totalDiscount;
  }

  function verifyIfCartHasProductWithZeroQuantity() {
    let cart = items;

    cart.forEach((item, index) => {
      if (item.quantity === 0) {
        cart.splice(index, 1);
      }
    });

    setItems(cart);
  }

  function calculeAmount() {
    var total = items.reduce((total, item) => {
      if (item.quantity < 3) {
        return item.price * item.quantity + total;
      } else {
        return calculateDiscount(item) + total;
      }
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
        let cart = [];
        products.map((product) => {
          if (data[product.id]) {
            let item = product;
            item["quantity"] = data[product.id];
            cart.push(item);
          }
        });

        setItems(cart);
      }
    });
  }, []);

  useEffect(() => {
    const persistentCart = {};
    items.forEach((element, index) => {
      persistentCart[element.id] = element.quantity;
    });
    storeData(persistentCart);
  }, [items]);

  useEffect(() => {
    calculeAmount();
    calculateItemsQuantity();
  }, [items]);

  useEffect(() => {
    verifyIfCartHasProductWithZeroQuantity();
    // console.log(items);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        totalValue,
        itemsQuantity,
        canCheckout,
        setCanCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  const {
    items,
    setItems,
    totalValue,
    itemsQuantity,
    canCheckout,
    setCanCheckout,
  } = context;
  return {
    items,
    setItems,
    totalValue,
    itemsQuantity,
    canCheckout,
    setCanCheckout,
  };
}
