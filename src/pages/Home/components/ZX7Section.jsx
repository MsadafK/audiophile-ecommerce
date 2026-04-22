import { Link } from "react-router-dom";

import zx7Desktop from "/assets/home/desktop/image-speaker-zx7.jpg";
import zx7Tablet from "/assets/home/tablet/image-speaker-zx7.jpg";
import zx7Mobile from "/assets/home/mobile/image-speaker-zx7.jpg";

export default function ZX7Section() {
  return (
    <section className="container mb-6 md:mb-12">

      <div
        className="
          rounded-lg overflow-hidden
          h-[320px]
          flex items-center
          px-6 md:px-16

          bg-no-repeat bg-cover bg-right

          /* 🔥 MOBILE */
          bg-[url('/src/assets/home/mobile/image-speaker-zx7.jpg')]

          /* 🔥 TABLET */
          md:bg-[url('/src/assets/home/tablet/image-speaker-zx7.jpg')]

          /* 🔥 DESKTOP */
          lg:bg-[url('/src/assets/home/desktop/image-speaker-zx7.jpg')]
        "
      >

        <div>
          <h2 className="text-black text-[28px] tracking-[2px] uppercase mb-8 font-bold">
            ZX7 Speaker
          </h2>

          <Link
            to="/product/zx7-speaker"
            className="
              inline-block
              px-8 py-3
              border border-black
              text-black text-[13px] font-bold tracking-[1px] uppercase
              transition
              hover:bg-black hover:text-white
            "
          >
            See Product
          </Link>
        </div>

      </div>
    </section>
  );
}