import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";

import games from "../utils/products";

import GameCard from "../components/GameCard";

// import CartIcon from "../assets/cart.svg";

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text>Logo</Text>
        <Button title="Carrinho" onPress={() => navigation.navigate("Cart")} />
      </View>

      <View style={styles.body}>
        <ScrollView>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    paddingTop: 20,
  },

  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  body: {},
});

export default HomePage;
