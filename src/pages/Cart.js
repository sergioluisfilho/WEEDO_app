import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

import { useCart } from "../context/CartContext";

import HeaderCart from "../components/HeaderCart";
import CartItemsContainer from "../components/CartItemsContainer";

import MapMark from "../assets/map-mark.png";

function Cart({ navigation }) {
  const [CEP, setCEP] = useState(null);
  const [shippingPrice, setShippingPrice] = useState(null);
  const [shippingData, setShippingData] = useState(null);
  const [showCepModal, setShowCepModal] = useState(false);

  const { items, setItems, totalValue, itemsQuantity } = useCart();
  //console.log(items);

  function getAddressData() {
    axios
      .get(`https://viacep.com.br/ws/${CEP}/json`)
      .then((response) => {
        console.log(response.data);
        if (response.data.uf == "PE") {
          setShippingPrice(100);
          setShippingData(response.data);
          setShowCepModal(true);
        } else {
          setShippingPrice(200);
          setShowCepModal(true);
          setShippingData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function checkout() {
    setItems([]);
    Alert.alert("Compra finalizada");
    navigation.navigate("HomePage");
  }

  // if (items.length == 0)
  //   return (
  //     <View>
  //       <Text>Carrinho vazio</Text>
  //     </View>
  //   );

  return (
    <ScrollView style={styles.cartContainer}>
      <HeaderCart navigation={navigation} />
      <CartItemsContainer />
      <View style={styles.shippingContainer}>
        <Text style={styles.shippingTitle}>Calcule o frete</Text>
        <View style={styles.cepContainer}>
          <TextInput
            placeholder="Seu CEP"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={setCEP}
            value={CEP}
          />
          <TouchableOpacity style={styles.MapMark} onPress={getAddressData}>
            <Image source={MapMark} />
          </TouchableOpacity>
        </View>
      </View>

      {showCepModal ? (
        <View>
          <View style={styles.triangleContainer}>
            <View style={styles.triangle}></View>
          </View>
          <View style={styles.addressModal}>
            <Text style={styles.address}>
              {shippingData.logradouro}, {shippingData.bairro}:{" "}
              {shippingData.localidade}
            </Text>
            <Text style={styles.shippingValue}>
              Valor do frete: R${shippingPrice}
            </Text>
          </View>
        </View>
      ) : (
        <View />
      )}
      <View style={styles.purchaseSummary}>
        {showCepModal && (
          <View style={styles.purchaseSummaryLine}>
            <Text style={styles.purchaseSummaryText}>frete</Text>
            <Text style={styles.purchaseSummaryTextBold}>
              R${shippingPrice}
            </Text>
          </View>
        )}
        <View style={styles.purchaseSummaryLine}>
          <Text style={styles.purchaseSummaryText}>{itemsQuantity} itens</Text>
          <Text style={styles.cartAmount}>R${totalValue}</Text>
        </View>
      </View>
      <Button title="Finalizar Compra" onPress={checkout} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    paddingTop: 20,
  },
  shippingContainer: {
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  shippingTitle: {
    justifyContent: "space-evenly",
    marginLeft: "10%",
    fontSize: 16,
    margin: 8,
    color: "#707070",
  },
  cepContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    padding: 15,
    width: "70%",
    borderRadius: 25,
    height: 52,
    borderColor: "#4CC5D2",
    color: "#707070",
    fontSize: 16,
  },
  MapMark: {
    backgroundColor: "#4CC5D2",
    padding: 15,
    borderRadius: 25,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  triangleContainer: {
    alignItems: "flex-end",
    width: "90%",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 18,
    borderLeftWidth: 10,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#DBDBDB",
    borderLeftColor: "transparent",
    justifyContent: "flex-end",
  },
  addressModal: {
    backgroundColor: "#DBDBDB",
    marginLeft: "7%",
    marginRight: "7%",
    alignItems: "center",
    borderRadius: 6,
    padding: 16,
  },
  address: {
    fontSize: 14,
    marginBottom: 16,
  },
  shippingValue: {
    fontWeight: "bold",
    fontSize: 16,
  },
  purchaseSummary: {
    backgroundColor: "#fff",
    flexDirection: "column",
    marginLeft: "7%",
    marginRight: "7%",
    padding: 16,
  },
  purchaseSummaryLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  purchaseSummaryText: {
    fontSize: 16,
    color: "#707070",
  },
  purchaseSummaryTextBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  cartAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default Cart;
