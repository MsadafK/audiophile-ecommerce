import { Link } from "react-router-dom";

import heroDesktop from "../../../assets/home/desktop/image-hero.jpg";
import heroTablet from "../../../assets/home/tablet/image-header.jpg";
import heroMobile from "../../../assets/home/mobile/image-header.jpg";

export default function HeroSection() {
  return (
    <section className="bg-black relative overflow-hidden">

      {/* 🔥 Image ONLY */}
      <picture>
        <source media="(min-width:1024px)" srcSet={heroDesktop} />
        <source media="(min-width:768px)" srcSet={heroTablet} />
        <img
          src={heroMobile}
          alt="hero"
          className="
            absolute inset-x-0 top-0 w-full h-full object-cover
            sm:top-0 md:-top-8 lg:-top-16
            object-[center_100%] md:object-[center_40%] lg:object-[right_35%]
            brightness-110 contrast-110
          "
        />
      </picture>

      {/* 🔥 Content */}
      <div className="
        container relative z-10
        py-24 md:min-h-[720px]
        flex items-center justify-center lg:justify-start
      ">

        <div className="
          max-w-[320px] md:max-w-[380px] lg:max-w-[400px]
          text-center md:text-center lg:text-left
          mx-auto lg:mx-0

          /* 🔥 MAGIC FIX */
          mt-10 md:mt-0
        ">

          {/* Overline */}
          <p className="uppercase text-[14px] tracking-[10px] text-white/50 mb-6">
            NEW PRODUCT
          </p>

          {/* Title */}
          <h1 className="
            text-white mb-6 font-bold uppercase
            text-[36px] leading-[40px]
            md:text-[48px] md:leading-[52px]
            lg:text-[56px] lg:leading-[58px]
          ">
            XX99 MARK II HEADPHONES
          </h1>

          {/* Description */}
          <p className="text-white/80 body-text mb-8 md:mb-10">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>

          {/* CTA */}
          <Link
            to="/product/xx99-mark-two-headphones"
            className="btn-primary inline-block"
          >
            SEE PRODUCT
          </Link>

        </div>
      </div>
    </section>
  );
}