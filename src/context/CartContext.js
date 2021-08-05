import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  function calculeAmount() {
    var total = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalValue(total);
  }

  useEffect(() => {
    //console.log(items);
    calculeAmount();
  }, [items]);
  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        totalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  const { items, setItems, totalValue } = context;
  return { items, setItems, totalValue };
}
