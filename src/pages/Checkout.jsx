import { useState } from "react";
import { useCart } from "../context/CartContext";
import OrderSuccessModal from "../components/OrderSuccessModal";

export default function Checkout() {
  const { cart, total } = useCart();

  const [payment, setPayment] = useState("e-money");
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section className="bg-[#F2F2F2] py-10 md:py-16">
      <div className="container max-w-[1110px] mx-auto">

        {/* GO BACK */}
        <button
          onClick={() => window.history.back()}
          className="text-black/50 mb-8"
        >
          Go Back
        </button>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

          {/* LEFT */}
          <div className="bg-white p-6 md:p-10 rounded-lg">

            <h1 className="text-[28px] font-bold mb-8">CHECKOUT</h1>

            {/* BILLING */}
            <h2 className="text-[#D87D4A] text-xs tracking-[1px] font-bold mb-4">
              BILLING DETAILS
            </h2>

            <div className="grid gap-6 md:grid-cols-2 text-sm">

              <div>
                <label className="font-bold block mb-2">Name</label>
                <input className="input" placeholder="Alexei Ward" />
              </div>

              <div>
                <label className="font-bold block mb-2">Email Address</label>
                <input className="input" placeholder="alexei@mail.com" />
              </div>

              <div className="md:col-span-2">
                <label className="font-bold block mb-2">Phone Number</label>
                <input className="input" placeholder="+1 202-555-0136" />
              </div>

            </div>

            {/* SHIPPING */}
            <h2 className="text-[#D87D4A] text-xs tracking-[1px] font-bold mt-10 mb-4">
              SHIPPING INFO
            </h2>

            <div className="grid gap-6 text-sm">

              <div>
                <label className="font-bold block mb-2">Address</label>
                <input className="input" placeholder="1137 Williams Avenue" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="font-bold block mb-2">ZIP Code</label>
                  <input className="input" placeholder="10001" />
                </div>

                <div>
                  <label className="font-bold block mb-2">City</label>
                  <input className="input" placeholder="New York" />
                </div>
              </div>

              <div>
                <label className="font-bold block mb-2">Country</label>
                <input className="input" placeholder="United States" />
              </div>

            </div>

            {/* PAYMENT */}
            <h2 className="text-[#D87D4A] text-xs tracking-[1px] font-bold mt-10 mb-4">
              PAYMENT DETAILS
            </h2>

            <div className="grid gap-6 text-sm md:grid-cols-2">

              <p className="font-bold">Payment Method</p>

              <div className="flex flex-col gap-4">

                <label className={`radio ${payment === "e-money" && "active"}`}>
                  <input
                    type="radio"
                    checked={payment === "e-money"}
                    onChange={() => setPayment("e-money")}
                  />
                  e-Money
                </label>

                <label className={`radio ${payment === "cod" && "active"}`}>
                  <input
                    type="radio"
                    checked={payment === "cod"}
                    onChange={() => setPayment("cod")}
                  />
                  Cash on Delivery
                </label>

              </div>

            </div>

            {/* CONDITIONAL */}
            {payment === "e-money" ? (
              <div className="grid gap-6 md:grid-cols-2 mt-6 text-sm">

                <div>
                  <label className="font-bold block mb-2">e-Money Number</label>
                  <input className="input" placeholder="238521993" />
                </div>

                <div>
                  <label className="font-bold block mb-2">e-Money PIN</label>
                  <input className="input" placeholder="6891" />
                </div>

              </div>
            ) : (
              <div className="flex gap-4 mt-6 text-sm text-black/60">
                💰 The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence.
              </div>
            )}

          </div>

          {/* RIGHT */}
          <div className="bg-white p-6 rounded-lg h-fit">

            <h2 className="font-bold mb-6">SUMMARY</h2>

            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-4">

                <img src={item.image} className="w-12 h-12 rounded" />

                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-black/50 text-sm">$ {item.price}</p>
                </div>

                <p className="ml-auto text-black/50">
                  x{item.quantity}
                </p>

              </div>
            ))}

            <div className="mt-6 space-y-2 text-sm">

              <div className="flex justify-between">
                <span className="text-black/50">TOTAL</span>
                <span>$ {total}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black/50">SHIPPING</span>
                <span>$ 50</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black/50">VAT (INCLUDED)</span>
                <span>$ {Math.floor(total * 0.2)}</span>
              </div>

              <div className="flex justify-between font-bold text-[#D87D4A] mt-2">
                <span>GRAND TOTAL</span>
                <span>$ {total + 50}</span>
              </div>

            </div>

            <button
              onClick={() => setShowSuccess(true)}
              className="w-full mt-6 bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-3 transition"
            >
              CONTINUE & PAY
            </button>

          </div>

        </div>
      </div>

      {showSuccess && (
        <OrderSuccessModal onClose={() => setShowSuccess(false)} />
      )}
    </section>
  );
}