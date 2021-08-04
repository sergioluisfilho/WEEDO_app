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
});

export default HomePage;
