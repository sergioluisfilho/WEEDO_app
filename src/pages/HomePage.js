import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import games from "../utils/products";

import GameCard from "../components/GameCard";

import Logo from "../assets/it.png";
import Cart from "../assets/cart.png";

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Image source={Logo} />
        <TouchableOpacity
          title="Carrinho"
          onPress={() => navigation.navigate("Cart")}
        >
          <Image source={Cart} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.title}>Games</Text>
        <Text style={styles.titleBold}>Populares</Text>
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
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },

  title: {
    marginLeft: 10,
    marginRight: 10,
  },

  titleBold: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },

  body: {},
});

export default HomePage;
