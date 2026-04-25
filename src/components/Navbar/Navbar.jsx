import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CartModal from "../Cart/CartModal";
import { useCart } from "../../context/CartContext";

import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import menuIcon from "/assets/shared/tablet/icon-hamburger.svg";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { totalItems } = useCart();
  const location = useLocation();

  // 🔥 CLOSE CART ON PAGE CHANGE
  useEffect(() => {
    setShowCart(false);
  }, [location]);

  const linkClass = ({ isActive }) =>
    `uppercase text-[13px] tracking-[2px] ${
      isActive ? "text-[#D87D4A]" : "text-white"
    } hover:text-[#D87D4A] transition`;

  return (
    <>
      <header className="bg-black text-white border-b border-white/10 md:border-none">
        <div className="container">
          <div className="h-[96px] flex items-center justify-between md:border-b md:border-white/10">

            {/* LEFT */}
            <div className="flex items-center gap-6">
              <button className="lg:hidden" onClick={() => setOpen(!open)}>
                <img src={menuIcon} alt="menu" />
              </button>

              <img src={logo} alt="logo" />
            </div>

            {/* NAV */}
            <nav className="hidden lg:flex gap-8">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/category/headphones" className={linkClass}>Headphones</NavLink>
              <NavLink to="/category/speakers" className={linkClass}>Speakers</NavLink>
              <NavLink to="/category/earphones" className={linkClass}>Earphones</NavLink>
            </nav>

            {/* CART ICON */}
            <button
              className="relative"
              onClick={() => setShowCart(prev => !prev)}
            >
              <img src={cartIcon} alt="cart" />

              {/* 🔥 BADGE */}
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="bg-white text-black py-6 px-6 lg:hidden">
            <nav className="flex flex-col gap-4 uppercase text-sm">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/category/headphones">Headphones</NavLink>
              <NavLink to="/category/speakers">Speakers</NavLink>
              <NavLink to="/category/earphones">Earphones</NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* CART MODAL */}
      <AnimatePresence>
        {showCart && (
          <CartModal onClose={() => setShowCart(false)} />
        )}
      </AnimatePresence>
    </>
  );
}