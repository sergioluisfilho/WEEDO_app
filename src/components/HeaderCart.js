import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Arrow from "../assets/arrow-right.js";

function HeaderCart({ navigation }) {
  return (
    <>
      <View style={styles.appBar}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Arrow />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Seu</Text>
        <Text style={styles.titleBold}>Carrinho</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowButton: {
    flex: 1,
    padding: 10,
  },
  titleContainer: {
    marginTop: 23,
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

export default HeaderCart;
