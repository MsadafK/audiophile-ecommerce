import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function OrderSuccessModal({ onClose }) {
  const { cart, total, clearCart } = useCart();

  const firstItem = cart[0];
  const otherCount = cart.length - 1;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

      <div className="bg-white w-full max-w-[500px] p-6 rounded-lg">

        <div className="w-12 h-12 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
          ✓
        </div>

        <h2 className="text-2xl font-bold mb-4">
          THANK YOU FOR YOUR ORDER
        </h2>

        <p className="text-black/50 mb-6">
          You will receive an email confirmation shortly.
        </p>

        <div className="flex flex-col md:flex-row overflow-hidden rounded-lg">

          {/* LEFT */}
          <div className="bg-[#F1F1F1] p-4 flex-1">
            <div className="flex items-center gap-4 mb-4">
              <img src={firstItem.image} className="w-12 h-12" />

              <div>
                <p className="font-bold text-sm">{firstItem.name}</p>
                <p className="text-black/50 text-sm">$ {firstItem.price}</p>
              </div>

              <p className="ml-auto text-black/50">
                x{firstItem.quantity}
              </p>
            </div>

            {otherCount > 0 && (
              <p className="text-center text-black/50 text-sm border-t pt-2">
                and {otherCount} other item(s)
              </p>
            )}
          </div>

          {/* RIGHT */}
          <div className="bg-black text-white p-4 flex flex-col justify-center">
            <p className="text-white/50 text-sm">GRAND TOTAL</p>
            <p className="font-bold text-lg">$ {total + 50}</p>
          </div>

        </div>

        <Link
          to="/"
          onClick={() => {
            clearCart();
            onClose();
          }}
          className="block mt-6 text-center bg-[#D87D4A] text-white py-3"
        >
          BACK TO HOME
        </Link>

      </div>
    </div>
  );
}