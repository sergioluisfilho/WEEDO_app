import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

import { useCart } from "../context/CartContext";

function GameCard(props) {
  function addToCart() {
    setItems(items + 1);
    Alert.alert("adicionado ao carrinho");
  }

  const { items, setItems } = useCart();

  return (
    <View>
      <Text>{props.game.name}</Text>
      <Text>Plataforma: {props.game.platform}</Text>
      <Text>
        Categoria/Gênero:{" "}
        {props.game.categories.map((category) => (
          <Text>{category} </Text>
        ))}
      </Text>
      <Button title={"R$" + props.game.price.toString()} onPress={addToCart} />
    </View>
  );
}

export default GameCard;
