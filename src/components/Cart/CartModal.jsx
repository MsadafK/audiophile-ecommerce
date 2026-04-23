import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartModal() {
  const { cart, updateQuantity, clearCart, total } = useCart();

  return (
    <div className="fixed top-[100px] right-6 md:right-10 lg:right-[calc((100%-1110px)/2)] bg-white w-[90%] max-w-[380px] p-6 rounded-lg z-50">

      {/* 🔥 Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-lg">
          CART ({cart.length})
        </h2>

        <button
          onClick={clearCart}
          className="text-sm text-black/50 underline"
        >
          Remove all
        </button>
      </div>

      {/* 🔁 Items */}
      {cart.length === 0 ? (
        <p className="text-black/50">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4"
          >
            {/* LEFT */}
            <div className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />

              <div>
                <p className="font-bold text-sm">{item.name}</p>
                <p className="text-black/50 text-sm">
                  $ {item.price}
                </p>
              </div>
            </div>

            {/* RIGHT (QUANTITY CONTROL) */}
            <div className="flex items-center bg-[#F1F1F1] px-3 py-1 gap-3 text-sm font-bold">
              <button
                onClick={() => updateQuantity(item.id, "dec")}
                className="text-black/50 hover:text-[#D87D4A]"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => updateQuantity(item.id, "inc")}
                className="text-black/50 hover:text-[#D87D4A]"
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      {/* 🔢 TOTAL */}
      <div className="flex justify-between mt-6 mb-6">
        <p className="text-black/50">TOTAL</p>
        <p className="font-bold">$ {total}</p>
      </div>

      {/* 🔘 CHECKOUT */}
      <Link
        to="/checkout"
        className="block text-center bg-[#D87D4A] text-white py-3 uppercase text-sm tracking-wide"
      >
        CHECKOUT
      </Link>
    </div>
  );
}