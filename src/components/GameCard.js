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

import Cart from "../assets/cart.js";

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
      // console.log("ja existe");
      let cart = items.map((item) => {
        if (item.id === game.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      setItems(cart);
    } else {
      // console.log("nao existe");
      game["quantity"] = 1;
      setItems([...items, game]);
    }

    props.onAddCart(true);
  }

  function isFreeToPlay(game) {
    if (game.price > 0) {
      return  <Text  style={styles.cardBtnText}>R${game.price.toFixed(2).toString().replace(".", ",")}</Text>;
    } else {
      return <Text style={styles.cardBtnTextF2P}>Gratuito p/ Jogar</Text>;
    }
  }

  const { items, setItems } = useCart();

  return (
    <View style={styles.container}>
      <Card.Image
        style={styles.gameImg}
        source={imageMap[game.imageName]}
      ></Card.Image>

      <View style={styles.gameInfoContainer}>
        <View style={styles.titleContainer}><Text style={styles.gameTitle}>{game.name}</Text></View>
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
        <TouchableOpacity
          style={styles.cardBtn}
          onPress={addToCart}
        >

          <Cart/>
          {isFreeToPlay(game)}
         
        </TouchableOpacity>
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
  titleContainer: {
    height: 60 
  },
  gameTitle: {
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 8,
    fontSize: 14,
    fontFamily: "OpenSans-Bold",
    color: "#303030",
    alignItems: "center",
  },
  gameInfoContainer: {
    height: 136,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 3,
    marginLeft: 6,
    marginRight: 6,
  },
  categoryInfoContainer: {
    backgroundColor: "#DBDBDB",
    marginLeft: 3,
    marginRight: 3,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%"
  },
  cardBtnText: {
    color: "#fff",
    fontSize: 16
  },

  cardBtnTextF2P: {
    color: "#fff",
    fontSize: 12
  },
  cardInfo: { paddingBottom: 2, fontSize: 9, color: "#303030", marginLeft: 9 },
});

export default GameCard;
