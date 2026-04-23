import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
  console.log("cart updated:", cart);
}, [cart]);

  // ➕ ADD TO CART
  const addToCart = (product, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...product, quantity }];
    });
  };

  // ➖ REMOVE ITEM
  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // 🔄 UPDATE QUANTITY
  const updateQuantity = (id, type) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id !== id) return item;

        const newQty =
          type === "inc" ? item.quantity + 1 : item.quantity - 1;

        return { ...item, quantity: newQty < 1 ? 1 : newQty };
      })
    );
  };

  // 🧹 CLEAR CART
  const clearCart = () => setCart([]);

  // 💰 TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        updateQuantity,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);