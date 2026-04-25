import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import OrderSuccessModal from "../components/OrderSuccessModal";

export default function Checkout() {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  const [payment, setPayment] = useState("e-money");
  const [showSuccess, setShowSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    emoneyNumber: "",
    emoneyPin: "",
  });

  const [errors, setErrors] = useState({});

  // 🔥 EDGE CASE FIX (CRITICAL)
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Required";
    if (!form.email || !form.email.includes("@"))
      newErrors.email = "Wrong format";
    if (!form.phone) newErrors.phone = "Required";
    if (!form.address) newErrors.address = "Required";
    if (!form.zip) newErrors.zip = "Required";
    if (!form.city) newErrors.city = "Required";
    if (!form.country) newErrors.country = "Required";

    if (payment === "e-money") {
      if (!form.emoneyNumber) newErrors.emoneyNumber = "Required";
      if (!form.emoneyPin) newErrors.emoneyPin = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = () => {
    if (cart.length === 0) return; // extra safety

    if (validate()) {
      setShowSuccess(true);
    }
  };

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

          {/* FORM */}
          <div className="bg-white p-6 md:p-10 rounded-lg">
            <h1 className="text-[28px] font-bold mb-8">CHECKOUT</h1>

            {/* BILLING */}
            <h2 className="section-title">BILLING DETAILS</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Input name="name" label="Name" value={form.name} onChange={handleChange} error={errors.name} />
              <Input name="email" label="Email Address" value={form.email} onChange={handleChange} error={errors.email} />
              <Input name="phone" label="Phone Number" value={form.phone} onChange={handleChange} error={errors.phone} full />
            </div>

            {/* SHIPPING */}
            <h2 className="section-title mt-10">SHIPPING INFO</h2>

            <div className="grid gap-6">
              <Input name="address" label="Address" value={form.address} onChange={handleChange} error={errors.address} />

              <div className="grid md:grid-cols-2 gap-6">
                <Input name="zip" label="ZIP Code" value={form.zip} onChange={handleChange} error={errors.zip} />
                <Input name="city" label="City" value={form.city} onChange={handleChange} error={errors.city} />
              </div>

              <Input name="country" label="Country" value={form.country} onChange={handleChange} error={errors.country} />
            </div>

            {/* PAYMENT */}
            <h2 className="section-title mt-10">PAYMENT DETAILS</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <p className="font-bold">Payment Method</p>

              <div className="flex flex-col gap-4">
                <Radio value="e-money" payment={payment} setPayment={setPayment} />
                <Radio value="cod" payment={payment} setPayment={setPayment} label="Cash on Delivery" />
              </div>
            </div>

            {payment === "e-money" && (
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <Input name="emoneyNumber" label="e-Money Number" value={form.emoneyNumber} onChange={handleChange} error={errors.emoneyNumber} />
                <Input name="emoneyPin" label="e-Money PIN" value={form.emoneyPin} onChange={handleChange} error={errors.emoneyPin} />
              </div>
            )}
          </div>

          {/* SUMMARY */}
          <div className="bg-white p-6 rounded-lg h-fit">
            <h2 className="font-bold mb-6">SUMMARY</h2>

            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 mb-4">
                <img src={item.image} className="w-12 h-12 rounded" />
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-black/50 text-sm">$ {item.price}</p>
                </div>
                <p className="ml-auto text-black/50">x{item.quantity}</p>
              </div>
            ))}

            <div className="mt-6 space-y-2 text-sm">
              <Row label="TOTAL" value={`$ ${total}`} />
              <Row label="SHIPPING" value="$ 50" />
              <Row label="VAT (INCLUDED)" value={`$ ${Math.floor(total * 0.2)}`} />
              <Row label="GRAND TOTAL" value={`$ ${total + 50}`} highlight />
            </div>

            {/* 🔥 BUTTON FIX */}
            <button
              onClick={handleSubmit}
              disabled={cart.length === 0}
              className={`btn-primary mt-6 ${
                cart.length === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <OrderSuccessModal
          cart={cart}
          total={total}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </section>
  );
}

/* ---------- COMPONENTS ---------- */

function Input({ name, label, value, onChange, error, full }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <div className="flex justify-between text-sm mb-2">
        <label className="font-bold">{label}</label>
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`input ${error ? "border-red-500" : ""}`}
      />
    </div>
  );
}

function Radio({ value, payment, setPayment, label }) {
  return (
    <label className={`radio ${payment === value ? "active" : ""}`}>
      <input
        type="radio"
        checked={payment === value}
        onChange={() => setPayment(value)}
      />
      {label || "e-Money"}
    </label>
  );
}

function Row({ label, value, highlight }) {
  return (
    <div className={`flex justify-between ${highlight ? "text-[#D87D4A] font-bold mt-2" : ""}`}>
      <span className="text-black/50">{label}</span>
      <span>{value}</span>
    </div>
  );
}