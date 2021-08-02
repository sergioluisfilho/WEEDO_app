import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

function GameCard(props) {
  return (
    <View>
      <Text>{props.game.name}</Text>
      <Text>Plataforma: {props.game.platform}</Text>
      <Text>
        Categoria/Gênero:{" "}
        {props.game.categories.map((c) => (
          <Text>{c} </Text>
        ))}
      </Text>
      <Button title={"R$" + props.game.price.toString()} />
    </View>
  );
}

export default GameCard;
