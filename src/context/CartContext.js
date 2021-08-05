import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items);
  }, [items]);
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
