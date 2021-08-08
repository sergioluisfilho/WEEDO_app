import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Logo from "../assets/it.js";
import Cart from "../assets/cart.js";

function HeaderHomePage({ navigation }) {
  return (
    <>
      <View style={styles.appBar}>
        <Logo />
        <TouchableOpacity
          style={styles.cartButton}
          title="Carrinho"
          onPress={() => navigation.navigate("Cart")}
        >
          <Cart />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Games</Text>
        <Text style={styles.titleBold}>Populares</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  cartButton: {
    padding: 12,
  },
  titleContainer: {
    marginTop: 33,
    marginBottom: 39,
  },

  title: {
    marginLeft: 12,
    marginRight: 12,
    fontSize: 32,
  },

  titleBold: {
    marginLeft: 12,
    marginRight: 12,
    fontFamily: "OpenSans-Bold",
    fontSize: 32,
  },
});

export default HeaderHomePage;
