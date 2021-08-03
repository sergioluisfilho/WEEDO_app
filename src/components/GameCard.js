import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

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
    <View>
      <Image style={styles.gameImg} source={imageMap[game.imageName]} />
      <Text>{game.name}</Text>
      <Text>Plataforma: {game.platform}</Text>
      <Text>
        Categoria/Gênero:{" "}
        {game.categories.map((category) => (
          <Text key={game.categories.indexOf(category)}>{category} </Text>
        ))}
      </Text>
      <Button title={"R$" + game.price.toString()} onPress={addToCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  gameImg: {
    width: 200,
    height: 100,
  },
});

export default GameCard;
