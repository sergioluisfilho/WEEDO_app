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
    <Card containerStyle={styles.container}>
      <Card.Image
        style={styles.gameImg}
        source={imageMap[game.imageName]}
      ></Card.Image>
      <Card.Title>{game.name}</Card.Title>

      <Text>Plataforma: {game.platform}</Text>
      <Text style={{ marginBottom: 10 }}>
        Categoria/Gênero:{" "}
        {game.categories.map((category) => (
          <Text key={game.categories.indexOf(category)}>{category} </Text>
        ))}
      </Text>
      <Button
        icon={<Icon color="#ffffff" />}
        buttonStyle={styles.cardBtn}
        title={"R$ " + game.price.toString()}
        onPress={addToCart}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  gameImg: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardBtn: {
    borderRadius: 0,
    marginTop: 40,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: "#4CC5D2",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default GameCard;
