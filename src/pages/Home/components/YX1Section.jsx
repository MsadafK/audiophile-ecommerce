import { Link } from "react-router-dom";

import yx1Desktop from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import yx1Tablet from "../../../assets/home/tablet/image-earphones-yx1.jpg";
import yx1Mobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";

export default function YX1Section() {
  return (
    <section className="container">

      <div className="grid gap-6 md:grid-cols-2">

        {/* 🔥 IMAGE */}
        <div className="rounded-lg overflow-hidden">
          <picture>
            <source media="(min-width:1024px)" srcSet={yx1Desktop} />
            <source media="(min-width:768px)" srcSet={yx1Tablet} />
            <img
              src={yx1Mobile}
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        {/* 🔥 CARD */}
        <div className="
          bg-[#F1F1F1]
          rounded-lg
          flex flex-col justify-center
          px-6 py-10
          md:px-10
          lg:px-16
        ">

          <h2 className="
            text-black font-bold uppercase
            text-[28px] tracking-[2px]
            mb-8
          ">
            YX1 Earphones
          </h2>

          <Link
            to="/product/yx1-earphones"
            className="
              inline-block
              w-fit
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