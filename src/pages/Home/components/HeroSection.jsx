import { Link } from "react-router-dom";

import heroDesktop from "/assets/home/desktop/image-hero.jpg";
import heroTablet from "/assets/home/tablet/image-header.jpg";
import heroMobile from "/assets/home/mobile/image-header.jpg";

export default function HeroSection() {
  return (
    <section className="bg-black">

      {/* 🔥 EVERYTHING inside container */}
      <div className="container relative overflow-hidden h-[600px] md:h-[720px]">

        {/* IMAGE */}
        <picture>
          <source media="(min-width:1024px)" srcSet={heroDesktop} />
          <source media="(min-width:768px)" srcSet={heroTablet} />
          <img
            src={heroMobile}
            alt="hero"
            className="
              absolute inset-0 w-full h-full object-cover

              /* 🔥 CONTROL POSITION */
              object-center
              md:object-[center_40%]
              lg:object-[right_center]
            "
          />
        </picture>

        {/* CONTENT */}
        <div className="
          relative z-10 h-full
          flex items-center justify-center lg:justify-start
        ">

          <div className="
            max-w-[320px] md:max-w-[380px] lg:max-w-[400px]
            text-center lg:text-left
            mx-auto lg:mx-0
          ">

            <p className="uppercase text-[14px] tracking-[10px] text-white/50 mb-6">
              NEW PRODUCT
            </p>

            <h1 className="
              text-white mb-6 font-bold uppercase
              text-[36px] leading-[40px]
              md:text-[48px] md:leading-[52px]
              lg:text-[56px] lg:leading-[58px]
            ">
              XX99 MARK II HEADPHONES
            </h1>

            <p className="text-white/80 body-text mb-8 md:mb-10">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>

            <Link
              to="/product/xx99-mark-two-headphones"
              className="btn-primary inline-block"
            >
              SEE PRODUCT
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}