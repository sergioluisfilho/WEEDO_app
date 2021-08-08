import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { setCustomText } from "react-native-global-props";

import CartProvider from "./src/context/CartContext";

import HomePage from "./src/pages/HomePage";
import Cart from "./src/pages/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "OpenSans-Regular": require("./src/assets/open_Sans/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./src/assets/open_Sans/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const customTextProps = {
    style: {
      fontFamily: "OpenSans-Regular",
    },
  };

  setCustomText(customTextProps);

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
