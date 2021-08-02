import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import games from "../utils/products";

import GameCard from "../components/GameCard";

// import CartIcon from "../assets/cart.svg";

function pages() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text>Logo</Text>
        <Button title="Carrinho" />
      </View>

      <View>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 20,
    marginTop: 20,
  },

  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  body: {},
});

export default pages;
