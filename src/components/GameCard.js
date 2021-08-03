import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

var imageMap = {
  "animalCrossing.png": require("../assets/images/animalCrossing.png"),
  "zelda.png": require("../assets/images/zelda.png"),
  "dota2.png": require("../assets/images/dota2.png"),
  "hades.png": require("../assets/images/hades.png"),
  "knockOutCity.png": require("../assets/images/knockOutCity.png"),
  "celeste.png": require("../assets/images/celeste.png"),
};

import { useCart } from "../context/CartContext";

function GameCard(props) {
  const game = props.game;

  function addToCart() {
    setItems([...items, props.game]);
    Alert.alert("adicionado ao carrinho");
  }

  const { items, setItems } = useCart();

  return (
    <Card>
      <Card.Image source={imageMap[game.imageName]}></Card.Image>
      <Card.Title>{game.name}</Card.Title>
      <Card.Divider />
      <Text>Plataforma: {game.platform}</Text>
      <Text style={{ marginBottom: 10 }}>
        Categoria/Gênero:{" "}
        {game.categories.map((category) => (
          <Text key={game.categories.indexOf(category)}>{category} </Text>
        ))}
      </Text>
      <Button
        icon={<Icon color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: "#4CC5D2",
        }}
        title={"R$ " + game.price.toString()}
        onPress={addToCart}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  gameImg: {
    width: 200,
    height: 100,
  },
});

export default GameCard;
