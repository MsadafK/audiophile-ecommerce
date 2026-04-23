import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, total } = useCart();

  return (
    <section className="bg-[#F2F2F2] min-h-screen py-10">
      <div className="container grid lg:grid-cols-2 gap-10">

        {/* 🔥 LEFT: FORM */}
        <div className="bg-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-6">CHECKOUT</h1>

          <p className="text-black/60">
            Form section (billing + shipping) yaha aayega.
          </p>
        </div>

        {/* 🔥 RIGHT: SUMMARY */}
        <div className="bg-white p-6 rounded-lg h-fit">
          <h2 className="font-bold mb-6">SUMMARY</h2>

          {/* ITEMS */}
          {cart.length === 0 ? (
            <p className="text-black/50">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />

                  <div>
                    <p className="font-bold text-sm">
                      {item.name}
                    </p>
                    <p className="text-black/50 text-sm">
                      $ {item.price}
                    </p>
                  </div>
                </div>

                <p className="text-black/50">
                  x{item.quantity}
                </p>
              </div>
            ))
          )}

          {/* TOTALS */}
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <p className="text-black/50">TOTAL</p>
              <p className="font-bold">$ {total}</p>
            </div>

            {/* OPTIONAL EXTRA (future ready) */}
            <div className="flex justify-between">
              <p className="text-black/50">SHIPPING</p>
              <p>$ 50</p>
            </div>

            <div className="flex justify-between">
              <p className="text-black/50">VAT (INCLUDED)</p>
              <p>$ {Math.floor(total * 0.2)}</p>
            </div>

            <div className="flex justify-between mt-4">
              <p className="text-black/50">GRAND TOTAL</p>
              <p className="text-[#D87D4A] font-bold">
                $ {total + 50}
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="w-full mt-6 bg-[#D87D4A] text-white py-3 uppercase text-sm tracking-wide">
            CONTINUE & PAY
          </button>
        </div>

      </div>
    </section>
  );
}