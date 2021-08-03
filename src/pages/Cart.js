import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import { useCart } from "../context/CartContext";

function Cart({ navigation }) {
  const { items, setItems } = useCart();
  console.log(items);

  function checkout() {
    setItems([]);
    Alert.alert("Compra finalizada");
    navigation.navigate("HomePage");
  }

  return (
    <View>
      <Text>{items.length} itens</Text>
      <Button title="Finalizar Compra" onPress={checkout} />
    </View>
  );
}

export default Cart;
