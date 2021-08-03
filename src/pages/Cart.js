import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useCart } from "../context/CartContext";
function Cart() {
  const { items, setItems } = useCart();
  console.log(items);
  return (
    <View>
      <Text>Cart: {items.length}</Text>
    </View>
  );
}

export default Cart;
