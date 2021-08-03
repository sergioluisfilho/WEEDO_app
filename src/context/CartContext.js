import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  const { items, setItems } = context;
  return { items, setItems };
}
