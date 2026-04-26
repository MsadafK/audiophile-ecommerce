import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CART_STORAGE_KEY = "audiophile-cart";

const getSavedCart = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (!savedCart) return [];

    const parsedCart = JSON.parse(savedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getSavedCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
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

  // 🔄 UPDATE QUANTITY (🔥 FIXED)
  const updateQuantity = (id, type) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.id !== id) return item;

          const newQty =
            type === "inc" ? item.quantity + 1 : item.quantity - 1;

          return { ...item, quantity: newQty };
        })
        .filter(item => item.quantity > 0) // 🔥 REMOVE if 0
    );
  };

  // 🧹 CLEAR CART
  const clearCart = () => setCart([]);

  // 💰 TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 🔢 TOTAL ITEMS (🔥 IMPORTANT)
  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
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
        total,
        totalItems // 🔥 NEW
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
