import { Link } from "react-router-dom";

import zx9 from "../../../assets/home/desktop/image-speaker-zx9.png";
import pattern from "../../../assets/home/desktop/pattern-circles.svg";

export default function ZX9Section() {
  return (
    <section className="my-6 md:mb-12">
      <div className="container">

        <div className="
          relative overflow-hidden rounded-lg
          bg-[#D87D4A]
          px-6 py-16
          md:py-20
          lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-0
        ">

          {/* 🔥 PERFECT RINGS BACKGROUND */}
          <img
            src={pattern}
            alt="pattern"
            className="
              absolute
              md:-top-[120px]
              left-1/2 -translate-x-1/2
              
              w-[800px]
              md:w-[900px]
              lg:w-[1200px]

              lg:left-0 lg:translate-x-[-20%] lg:top-1/2 lg:-translate-y-1/2
            "
          />

          {/* 🔥 IMAGE */}
          <div className="
            relative z-10
            flex justify-center
            lg:justify-start
            lg:w-1/2
          ">
            <img
              src={zx9}
              alt="ZX9 Speaker"
              className="
                w-[180px]
                md:w-[200px]
                lg:w-[410px]

                mt-4
                lg:mt-0 lg:translate-y-20
              "
            />
          </div>

          {/* 🔥 CONTENT */}
          <div className="
            relative z-10
            text-center mt-12
            md:mt-16
            lg:mt-0 lg:w-1/2 lg:text-left
          ">

            <h2 className="
              text-white font-bold uppercase
              text-[36px] leading-[40px]
              md:text-[48px] md:leading-[52px]
              lg:text-[56px] lg:leading-[58px]
              mb-6
            ">
              ZX9 SPEAKER
            </h2>

            <p className="
              text-white/75
              text-[15px] leading-[25px]
              mb-8
              max-w-[320px]
              mx-auto lg:mx-0
            ">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>

            <Link
              to="/product/zx9-speaker"
              className="
                inline-block
                bg-black text-white
                px-8 py-4
                text-[13px] font-bold tracking-[1px] uppercase
                transition
                hover:bg-[#4C4C4C]
              "
            >
              SEE PRODUCT
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}