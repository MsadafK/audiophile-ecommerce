import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartModal({ onClose }) {
  const { cart, updateQuantity, clearCart, total } = useCart();

  return (
    <>
      {/* 🔥 OVERLAY (fade only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* 🔥 YOUR SAME MODAL (just animated) */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed top-[100px] right-6 md:right-10 lg:right-[calc((100%-1110px)/2)] bg-white w-[90%] max-w-[380px] p-6 rounded-lg z-50"
      >
        {/* 🔥 SAME UI (unchanged) */}
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-lg">
            CART ({cart.length})
          </h2>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm text-black/50 underline"
            >
              Remove all
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <p className="text-black/50">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex gap-4 items-center">
                <img src={item.image} className="w-12 h-12" />

                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-black/50 text-sm">$ {item.price}</p>
                </div>
              </div>

              <div className="flex items-center bg-[#F1F1F1] px-3 py-1 gap-3 text-sm font-bold">
                <button onClick={() => updateQuantity(item.id, "dec")}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, "inc")}>+</button>
              </div>
            </div>
          ))
        )}

        <div className="flex justify-between mt-6 mb-6">
          <p className="text-black/50">TOTAL</p>
          <p className="font-bold">$ {total}</p>
        </div>

        {cart.length === 0 ? (
          <button
            disabled
            className="block w-full text-center bg-[#D87D4A] text-white py-3 uppercase opacity-50 cursor-not-allowed"
          >
            CHECKOUT
          </button>
        ) : (
          <Link
            to="/checkout"
            onClick={onClose}
            className="block text-center bg-[#D87D4A] text-white py-3 uppercase"
          >
            CHECKOUT
          </Link>
        )}
      </motion.div>
    </>
  );
}
