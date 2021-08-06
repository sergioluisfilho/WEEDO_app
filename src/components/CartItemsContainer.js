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

import EmptyCart from "../assets/empty-cart.png";

function CartItemsContainer() {
  const { items } = useCart();

  if (items.length === 0)
    return (
      <Image
        style={{
          width: 130,
          height: 130,
          alignSelf: "center",
          marginBottom: 40,
        }}
        source={EmptyCart}
      />
    );

  return (
    <>
      {items.length > 0 &&
        items.map((item) => {
          if (item.quantity > 0) return <CartItem key={item.id} game={item} />;
        })}
    </>
  );
}

export default CartItemsContainer;

const styles = StyleSheet.create({});
