import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import games from "../utils/products";

import HeaderHomePage from "../components/HeaderHomePage";
import GameCard from "../components/GameCard";

function HomePage({ navigation }) {
  const [numCols, setColumnNo] = useState(2);

  return (
    <View style={styles.container}>
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

  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
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
    fontWeight: "bold",
    fontSize: 32,
  },

  body: {},
  gameCard: {},
});

export default HomePage;
