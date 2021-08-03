import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
} from "react-native";
import axios from "axios";

import { useCart } from "../context/CartContext";

function Cart({ navigation }) {
  const [CEP, setCEP] = React.useState(null);

  const { items, setItems } = useCart();
  //console.log(items);

  function getAddressData() {
    axios
      .get(`https://viacep.com.br/ws/${CEP}/json`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function checkout() {
    setItems([]);
    Alert.alert("Compra finalizada");
    navigation.navigate("HomePage");
  }

  if (items.length == 0)
    return (
      <View>
        <Text>Carrinho vazio</Text>
      </View>
    );

  return (
    <View>
      <Text>{items.length} itens</Text>
      <View style={styles.cepContainer}>
        <TextInput
          placeholder="Seu CEP"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={setCEP}
          value={CEP}
        />
        <Button title="Calcular" onPress={getAddressData} />
      </View>

      <Button title="Finalizar Compra" onPress={checkout} />
    </View>
  );
}

const styles = StyleSheet.create({
  cepContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Cart;
