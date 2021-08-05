import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";

import Cart from "../assets/cart.png";

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
    if (items.includes(game)) {
      let cart = items.map((item) => {
        if (item === game) {
          item.quantity = item.quantity + 1;
          
        } return item;
      });
      setItems(cart);
    } else {
      game["quantity"] = 1;

      setItems([...items, game]);
    }

    Alert.alert("adicionado ao carrinho");
  }

  const { items, setItems } = useCart();

  return (
    <View style={styles.container}>
      <Card.Image
        style={styles.gameImg}
        source={imageMap[game.imageName]}
      ></Card.Image>

      <View style={styles.gameInfoContainer}>
        <Text style={styles.gameTitle}>{game.name}</Text>
        <Text style={styles.cardInfo}>Plataforma: {game.platform}</Text>
        <Text style={styles.cardInfo}>Categoria/Gênero: </Text>
        <View style={styles.categoriesContainer}>
          {game.categories.map((category) => (
            <View
              key={game.categories.indexOf(category)}
              style={styles.categoryInfoContainer}
            >
              <Text style={styles.categoryInfo}>{category} </Text>
            </View>
          ))}
        </View>
      </View>
      <View>
        <Button
          icon={<Image source={Cart} />}
          buttonStyle={styles.cardBtn}
          title={" R$ " + game.price.toString()}
          onPress={addToCart}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    width: 160,
    height: 251,
  },
  gameImg: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: 160,
    height: 78,
  },
  gameTitle: {
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#303030",
    alignItems: "center",
  },
  gameInfoContainer: {
    height: 136,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 3,
  },
  categoryInfoContainer: {
    backgroundColor: "#DBDBDB",

    borderRadius: 6,
  },
  categoryInfo: {
    fontSize: 9,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 6,
    paddingRight: 6,
    fontSize: 9,
    color: "#303030",
  },
  cardBtn: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: "#4CC5D2",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    height: 37,
  },
  cardInfo: { paddingBottom: 2, fontSize: 9, color: "#303030", marginLeft: 9 },
});

export default GameCard;
