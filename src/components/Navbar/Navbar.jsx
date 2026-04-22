import { NavLink } from "react-router-dom";
import { useState } from "react";

import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import menuIcon from "/assets/shared/tablet/icon-hamburger.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `uppercase text-[13px] tracking-[2px] ${
      isActive ? "text-[#D87D4A]" : "text-white"
    } hover:text-[#D87D4A] transition`;

  return (
    <header className="bg-black text-white border-b border-white/10 md:border-none">

      {/* 🔥 Wrapper */}
      <div className="container">

        {/* 🔥 Inner */}
        <div className="h-[96px] flex items-center justify-between md:border-b md:border-white/10">

          {/* Left */}
          <div className="flex items-center gap-6">
            <button
              className="lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <img src={menuIcon} alt="menu" />
            </button>

            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/category/headphones" className={linkClass}>Headphones</NavLink>
            <NavLink to="/category/speakers" className={linkClass}>Speakers</NavLink>
            <NavLink to="/category/earphones" className={linkClass}>Earphones</NavLink>
          </nav>

          {/* Cart */}
          <img src={cartIcon} alt="cart" />

        </div>
      </div>

      {/* 🔥 Mobile Dropdown */}
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
  );
}