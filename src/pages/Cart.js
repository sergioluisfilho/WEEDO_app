import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useCart } from "../context/CartContext";
function Cart() {
  const { items, setItems } = useCart();
  console.log(items);
  return (
    <View>
      <Text>{items.length} itens</Text>
    </View>
  );
}

export default Cart;
