import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [itemsQuantity, setItemsQuantity] = useState(0);

  function calculeAmount() {
    var total = items.reduce((total, item) => {
      return item.price * item.quantity + total;
    }, 0);
    setTotalValue(total);
  }

  function calculateItemsQuantity() {
    var total = items.reduce((total, item) => total + 1 * item.quantity, 0);
    setItemsQuantity(total);
  }
  useEffect(() => {
    console.log(items);
    calculeAmount();
    calculateItemsQuantity();
  }, [items]);
  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        totalValue,
        itemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  const { items, setItems, totalValue, itemsQuantity } = context;
  return { items, setItems, totalValue, itemsQuantity };
}
