import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useCart } from "../context/CartContext";
function Cart() {
  const { items, setItems } = useCart();
  return (
    <View>
      <Text>Cart: {items}</Text>
    </View>
  );
}

export default Cart;
