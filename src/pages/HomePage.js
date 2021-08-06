import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Modal,
  Pressable,
  Alert,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const statusBarStyle = "dark-content";

import { useCart } from "../context/CartContext";

import games from "../utils/products";

import HeaderHomePage from "../components/HeaderHomePage";
import GameCard from "../components/GameCard";

function HomePage({ navigation }) {
  const [numCols, setColumnNo] = useState(2);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
      />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        data={games}
        ListHeaderComponent={<HeaderHomePage navigation={navigation} />}
        numColumns={numCols}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <GameCard game={item} />;
        }}
      />
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
});

export default HomePage;
