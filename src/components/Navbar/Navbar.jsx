import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import menuIcon from "/assets/shared/tablet/icon-hamburger.svg";
import closeIcon from "/assets/shared/desktop/icon-close.svg"; // 🔥 add this icon

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // 🔥 Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const linkClass = ({ isActive }) =>
    `uppercase text-[15px] tracking-[2px] ${
      isActive ? "text-[#D87D4A]" : "text-black"
    } hover:text-[#D87D4A] transition`;

  return (
    <>
      <header className="bg-black text-white relative z-50">
        <div className="container">
          <div className="h-[72px] flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-6">
              <button onClick={() => setOpen(!open)}>
                {open ? (
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L19 19M19 1L1 19" stroke="#fff" strokeWidth="2" />
                  </svg>
                ) : (
                  <img src={menuIcon} alt="menu" />
                )}
              </button>

              <img src={logo} alt="logo" />
            </div>

            {/* CART */}
            <img src={cartIcon} alt="cart" />
          </div>
        </div>
      </header>

      {/* 🔥 OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔥 MOBILE MENU */}
      <div
        className={`
          fixed top-[72px] left-0 w-full bg-white z-50
          transition-all duration-300 ease-in-out
          ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">

          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/category/headphones" className={linkClass}>
            Headphones
          </NavLink>

          <NavLink to="/category/speakers" className={linkClass}>
            Speakers
          </NavLink>

          <NavLink to="/category/earphones" className={linkClass}>
            Earphones
          </NavLink>

        </nav>
      </div>
    </>
  );
}