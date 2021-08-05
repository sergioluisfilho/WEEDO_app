import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useCart } from "../context/CartContext";

import CartItem from "./CartItem";

function CartItemsContainer() {
  const { items } = useCart();

  if (items.length === 0) return <Text>Carrinho Vazio</Text>;

  return (
    <>
      {items.length > 0 &&
        items.map((item) => <CartItem key={item.id} game={item} />)}
    </>
  );
}

export default CartItemsContainer;

const styles = StyleSheet.create({});
