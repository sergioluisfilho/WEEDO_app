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

function CartItem() {
  return (
    <View style={styles.container}>
      <View style={styles.imgAndInfoContainer}>
        <Image style={styles.gameImg} source={imageMap["zelda.png"]} />
        <View style={styles.InfoContainer}>
          <Text>Game Name</Text>
          <Text>Preço</Text>
        </View>
      </View>
      <View>
        <Text>Contador</Text>
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
  },
  imgAndInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  InfoContainer: {},
  gameImg: {
    borderRadius: 16,
    width: 110,
    height: 110,
  },
});
