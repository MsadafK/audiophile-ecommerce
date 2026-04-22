import { NavLink } from "react-router-dom";

import logo from "../../assets/shared/desktop/logo.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  const linkClass = ({ isActive }) =>
    `uppercase text-[13px] tracking-[2px] ${
      isActive ? "text-[#D87D4A]" : "text-white"
    } hover:text-[#D87D4A] transition`;

  return (
    <footer className="bg-black text-white ">

    <div className="container py-12 lg:py-16">

    {/* 🔥 Top Row Wrapper (IMPORTANT) */}
        <div className="relative">

        {/* 🔥 Orange Bar (aligned with logo) */}
        <div className="
            absolute top-0 left-1/2 -translate-x-1/2
            w-[100px] h-1 bg-[#D87D4A]
            lg:left-0 lg:translate-x-0
            -translate-y-[64px]
        " />

        {/* 🔥 Top Row */}
        <div className="
            flex flex-col items-center text-center
            gap-8
            lg:flex-row lg:justify-between lg:items-start lg:text-left
        ">

            {/* Logo */}
            <img src={logo} alt="logo" />

            {/* Nav */}
            <nav className="flex flex-col gap-4 lg:flex-row lg:gap-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/category/headphones" className={linkClass}>Headphones</NavLink>
            <NavLink to="/category/speakers" className={linkClass}>Speakers</NavLink>
            <NavLink to="/category/earphones" className={linkClass}>Earphones</NavLink>
            </nav>

        </div>

    </div>

        {/* 🔥 Description */}
        <p className="
          text-white/50 text-[15px] leading-[25px]
          mt-8
          max-w-[540px]
          mx-auto lg:mx-0
          text-center lg:text-left
        ">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
        </p>

        {/* 🔥 Bottom Row */}
        <div className="
          flex flex-col items-center gap-8
          mt-10
          lg:flex-row lg:justify-between
        ">

          {/* Copyright */}
          <p className="text-white/50 text-[15px]">
            Copyright 2026. All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a href="#">
              <img
                src={facebook}
                alt="facebook"
                className="hover:opacity-70 transition"
              />
            </a>

            <a href="#">
              <img
                src={twitter}
                alt="twitter"
                className="hover:opacity-70 transition"
              />
            </a>

            <a href="#">
              <img
                src={instagram}
                alt="instagram"
                className="hover:opacity-70 transition"
              />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}