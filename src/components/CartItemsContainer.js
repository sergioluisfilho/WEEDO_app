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
  return (
    <ScrollView>
      <CartItem />
    </ScrollView>
  );
}

export default CartItemsContainer;

const styles = StyleSheet.create({});
