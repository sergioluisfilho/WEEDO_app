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
  const [modalVisible, setModalVisible] = useState(false);

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
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.messageBox}>
              <Text style={styles.message}>Item adicionado ao carrinho</Text>
            </View>
          </View>
        </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  messageBox: {
    backgroundColor: "#47CC92",
    marginBottom: 76,
    width: "80%",
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 16,
    color: "#fff",
  },
});

export default HomePage;
