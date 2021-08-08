import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

import { useCart } from "../context/CartContext";

import Plus from "../assets/plus.png";
import Less from "../assets/less.png";

var imageMap = {
  "animalCrossing.png": require("../assets/images/animalCrossing.png"),
  "zelda.png": require("../assets/images/zelda.png"),
  "dota2.png": require("../assets/images/dota2.png"),
  "hades.png": require("../assets/images/hades.png"),
  "knockOutCity.png": require("../assets/images/knockOutCity.png"),
  "celeste.png": require("../assets/images/celeste.png"),
};

function CartItem(props) {
  const { items, setItems } = useCart();

  function incrementGameQuantity(game) {
    console.log("increase game quantity");
    let cart = items.map((item) => {
      if (item.id === game.id) {
        item.quantity = item.quantity + 1;
      }
      return item;
    });
    setItems(cart);
  }
  function decrementGameQuantity(game) {
    console.log("decrase game quantity");

    let cart = items.map((item) => {
      if (item.id === game.id) {
        item.quantity = item.quantity - 1;
      }
      return item;
    });

    setItems(cart);
  }

  let game = props.game;

  function isFreeToPlay(game) {
    if (game.price > 0) {
      return (
        <Text style={styles.gamePrice}>
          R${game.price.toFixed(2).toString().replace(".", ",")}
        </Text>
      );
    } else {
      return <Text style={styles.gamePrice}>Gratuito p/ Jogar</Text>;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgAndInfoContainer}>
        <Image style={styles.gameImg} source={imageMap[game.imageName]} />
        <View style={styles.InfoContainer}>
          <Text style={styles.gameTitle}>{game.name}</Text>
          {isFreeToPlay(game)}
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => incrementGameQuantity(game)}
          style={styles.incrementBtn}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={styles.gameQuantity}>{game.quantity}</Text>
        <TouchableOpacity
          onPress={() => decrementGameQuantity(game)}
          style={styles.incrementBtn}
        >
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
  },
  imgAndInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "80%",
  },
  InfoContainer: {
    marginLeft: 10,
    maxWidth: 150,
  },
  gameImg: {
    borderRadius: 16,
    width: 110,
    height: 110,
  },
  gameTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  gamePrice: {
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
  },
  gameQuantity: {
    fontSize: 14,
    fontFamily: "OpenSans-Bold",
  },
  quantityContainer: {
    backgroundColor: "#DBDBDB",
    borderRadius: 6,
    alignItems: "center",
  },
  incrementBtn: { width: 22, height: 22, alignItems: "center" },
});
