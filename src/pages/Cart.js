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
} from "react-native";
import axios from "axios";

import { useCart } from "../context/CartContext";

import MapMark from "../assets/map-mark.png";

function Cart({ navigation }) {
  const [CEP, setCEP] = useState(null);
  const [shippingPrice, setShippingPrice] = useState(null);
  const [shippingData, setShippingData] = useState(null);
  const [showCepModal, setShowCepModal] = useState(false);

  const { items, setItems } = useCart();
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

  if (items.length == 0)
    return (
      <View>
        <Text>Carrinho vazio</Text>
      </View>
    );

  return (
    <View style={styles.cartContainer}>
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
      <Text>{items.length} itens</Text>
      <Button title="Finalizar Compra" onPress={checkout} />
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: "#fff",
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
});

export default Cart;
