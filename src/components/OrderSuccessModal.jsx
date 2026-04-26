import { useState } from "react";

export default function OrderSuccessModal({ cart, total, onClose }) {
  const [showAll, setShowAll] = useState(false);

  const firstItem = cart[0];
  const remaining = cart.length - 1;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">

      <div className="bg-white rounded-lg p-6 md:p-10 w-full max-w-[540px]">

        {/* ICON */}
        <div className="w-12 h-12 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
          ✓
        </div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-[32px] font-bold leading-tight mb-4">
          THANK YOU <br /> FOR YOUR ORDER
        </h2>

        <p className="text-black/50 mb-6">
          You will receive an email confirmation shortly.
        </p>

        {/* SUMMARY BOX */}
        <div className="rounded-lg overflow-hidden md:flex">

          {/* LEFT */}
          <div className="bg-[#F1F1F1] p-4 flex-1">

            <div className="flex items-center gap-4 mb-4">
              <img src={firstItem.image} className="w-12 h-12" />
              <div>
                <p className="font-bold text-sm">{firstItem.name}</p>
                <p className="text-black/50 text-sm">$ {firstItem.price}</p>
              </div>
              <p className="ml-auto text-black/50">x{firstItem.quantity}</p>
            </div>

            {showAll && cart.slice(1).map(item => (
              <div key={item.id} className="flex justify-between text-sm mb-2">
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
              </div>
            ))}

            <hr className="my-3" />

            {remaining > 0 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-xs text-black/50"
              >
                {showAll
                  ? "View less"
                  : `and ${remaining} other item(s)`}
              </button>
            )}

          </div>

          {/* RIGHT */}
          <div className="bg-black text-white p-6 flex flex-col justify-center md:w-[200px]">
            <p className="text-white/50 text-sm mb-2">GRAND TOTAL</p>
            <p className="text-lg font-bold">$ {total + 50}</p>
          </div>

        </div>

        {/* BUTTON */}
        <button onClick={onClose} className="btn-primary mt-6 w-full">
          BACK TO HOME
        </button>

      </div>
    </div>
  );
}
