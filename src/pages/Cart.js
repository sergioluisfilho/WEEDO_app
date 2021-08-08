import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  Alert,
} from "react-native";

import axios from "axios";

import { useCart } from "../context/CartContext";

import HeaderCart from "../components/HeaderCart";
import CartItemsContainer from "../components/CartItemsContainer";

import MapMark from "../assets/map-mark.js";

import CartCheck from "../assets/cart-check.png";

function Cart({ navigation }) {
  const [CEP, setCEP] = useState(null);
  const [shippingPrice, setShippingPrice] = useState(null);
  const [shippingData, setShippingData] = useState(null);
  const [showCepModal, setShowCepModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const {
    items,
    setItems,
    totalValue,
    itemsQuantity,
    canCheckout,
    setCanCheckout,
  } = useCart();

  useEffect(() => {
    if (shippingPrice && items.length > 0) {
      console.log("pode jogar");
      setCanCheckout(true);
    } else {
      console.log("nao pode jogar");
      setCanCheckout(false);
    }
  }, [shippingPrice, items.length]);
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
        Alert.alert("CEP inválido");
      });
  }

  function IsPlural(value) {
    if (value >1) return "itens"
    else return "item"
  }

  function checkout() {
    setItems([]);
    navigation.navigate("HomePage");
  }

  return (
    <View style={styles.windowContainer}>
      <ScrollView bounces={false}>
        <View style={styles.cartContainer}>
          <HeaderCart navigation={navigation} />
          <CartItemsContainer />
          <View style={styles.divider} />
          <View style={styles.shippingContainer}>
            <Text style={styles.shippingTitle}>Calcule o frete</Text>
            <View style={styles.cepContainer}>
              <TextInput
                placeholder="seu CEP"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={setCEP}
                value={CEP}
              />
              <TouchableOpacity style={styles.MapMark} onPress={getAddressData}>
              <MapMark/>
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
                  valor do frete: R$
                  {shippingPrice.toFixed(2).toString().replace(".", ",")}
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
                  R${shippingPrice.toFixed(2).toString().replace(".", ",")}
                </Text>
              </View>
            )}
            <View style={styles.purchaseSummaryLine}>
              <Text style={styles.purchaseSummaryText}>
                {itemsQuantity} {IsPlural(itemsQuantity)} 
              </Text>
              <Text style={styles.cartAmount}>
                R${totalValue.toFixed(2).toString().replace(".", ",")}
              </Text>
            </View>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.modalTitle}>
                    <Text style={styles.modalTitleText}>Compra</Text>
                    <Text style={styles.modalTitleBold}>Finalizada</Text>
                  </View>
                  <Text style={styles.modalSucessText}>
                    Sua Compra foi finalizada com sucesso!
                  </Text>
                  <View style={styles.modalPurchaseResume}>
                    <Text style={styles.modalPurchaseResumeText}>
                      Valor da compra:{" "}
                    </Text>
                    <Text style={styles.modalPurchaseResumeValue}>
                      R$
                      {(shippingPrice + totalValue)
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")}
                    </Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {
                        checkout();
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Voltar para a Home</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
        <View style={canCheckout ? { opacity: 1 } : { opacity: 0.6 }}>
          <TouchableOpacity
            style={styles.checkoutButtonTouchArea}
            onPress={() => canCheckout && setModalVisible(!modalVisible)}
          >
            <Text style={styles.CheckoutButtonText}>
              Finalizar <Text style={styles.CheckoutButtonBold}>Compra</Text>
            </Text>
            <Image style={styles.CheckoutButtonImg} source={CartCheck} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  windowContainer: {
    flex: 1,
    backgroundColor: "#4CC5D2",
  },
  cartContainer: {
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  divider: {
    maxWidth: "15%",
    height: 4,
    borderRadius: 20,
    backgroundColor: "#DBDBDB",
    marginLeft: "45%",
    marginTop: 29,
    marginBottom: 26,
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
    fontFamily: "OpenSans-Bold",
    fontSize: 16,
  },
  purchaseSummary: {
    backgroundColor: "#fff",
    flexDirection: "column",
    marginLeft: "7%",
    marginRight: "7%",
    padding: 16,
    marginBottom: 40,
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
    fontFamily: "OpenSans-Bold",
    color: "black",
  },
  cartAmount: {
    fontSize: 20,
    fontFamily: "OpenSans-Bold",
    color: "black",
  },
  // modal css
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    opacity: 1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    borderRadius: 6,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOpen: {
    backgroundColor: "#4CC5D2",
  },
  buttonClose: {
    backgroundColor: "#4CC5D2",
  },
  textStyle: {
    color: "white",

    textAlign: "center",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalTitle: { marginBottom: 34 },
  modalTitleText: { fontSize: 32 },
  modalTitleBold: { fontSize: 32, fontFamily: "OpenSans-Bold" },
  modalSucessText: { fontSize: 16 },
  modalPurchaseResume: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 14,
  },
  modalPurchaseResumeText: { flex: 1, fontSize: 16, color: "#878787" },
  modalPurchaseResumeValue: { fontSize: 20, fontFamily: "OpenSans-Bold" },
  checkoutButtonContainer: {
    height: 80,
  },
  checkoutButtonTouchArea: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "space-between",
  },
  CheckoutButtonText: {
    fontSize: 20,
    color: "#fff",
  },
  CheckoutButtonBold: {
    fontFamily: "OpenSans-Bold",
  },
  CheckoutButtonImg: {},
});

export default Cart;
