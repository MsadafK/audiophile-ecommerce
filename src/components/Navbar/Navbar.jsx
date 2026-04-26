import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext"; // ✅ ADD

import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import menuIcon from "/assets/shared/tablet/icon-hamburger.svg";

import CartModal from "../Cart/CartModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  const { cart } = useCart(); // ✅ ADD

  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0); // ✅ ADD

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const linkClass = ({ isActive }) =>
    `uppercase text-[15px] tracking-[2px] ${
      isActive ? "text-[#D87D4A]" : "text-white"
    } hover:text-[#D87D4A] transition`;

  const mobileLinkClass = ({ isActive }) =>
    `uppercase tracking-[2px] ${
      isActive ? "text-[#D87D4A]" : "text-black"
    } hover:text-[#D87D4A] transition`;

  return (
    <>
      <header className="bg-black text-white relative z-50">
        
        <div className="container">
          <div className="h-[72px] flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-6">
              <button onClick={() => setOpen(!open)} className="lg:hidden">
                {open ? (
                  <svg width="20" height="20">
                    <path d="M1 1L19 19M19 1L1 19" stroke="#fff" strokeWidth="2" />
                  </svg>
                ) : (
                  <img src={menuIcon} alt="menu" />
                )}
              </button>

              <img src={logo} alt="logo" />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex gap-8">
              <NavLink to="/" end className={linkClass}>Home</NavLink>
              <NavLink to="/category/headphones" className={linkClass}>Headphones</NavLink>
              <NavLink to="/category/speakers" className={linkClass}>Speakers</NavLink>
              <NavLink to="/category/earphones" className={linkClass}>Earphones</NavLink>
            </nav>

            {/* CART */}
            <button onClick={() => setCartOpen(true)} className="relative">
              <img src={cartIcon} alt="cart" />

              {/* ✅ BADGE */}
              {totalQty > 0 && (
                <span className="
                  absolute -top-2 -right-2
                  bg-[#D87D4A] text-white
                  text-[10px] font-bold
                  w-5 h-5 flex items-center justify-center
                  rounded-full
                ">
                  {totalQty}
                </span>
              )}
            </button>

          </div>
        </div>

        <div className="border-b border-white/10 w-full lg:w-[1100px] lg:mx-auto" />
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`
          fixed top-[72px] left-0 w-full bg-white z-50
          transition-all duration-300 ease-in-out
          lg:hidden
          ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }
        `}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          <NavLink to="/" end className={mobileLinkClass}>Home</NavLink>
          <NavLink to="/category/headphones" className={mobileLinkClass}>Headphones</NavLink>
          <NavLink to="/category/speakers" className={mobileLinkClass}>Speakers</NavLink>
          <NavLink to="/category/earphones" className={mobileLinkClass}>Earphones</NavLink>
        </nav>
      </div>

      {cartOpen && (
        <CartModal onClose={() => setCartOpen(false)} />
      )}
    </>
  );
}