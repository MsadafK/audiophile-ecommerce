import { Link } from "react-router-dom";

import headphones from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";

export default function CategorySection() {
  const categories = [
    { name: "HEADPHONES", img: headphones, link: "/category/headphones" },
    { name: "SPEAKERS", img: speakers, link: "/category/speakers" },
    { name: "EARPHONES", img: earphones, link: "/category/earphones" },
  ];

  return (
    <section className="py-24 pt-32">
      <div className="container">

        <div className="
          flex flex-col gap-16
          md:flex-row md:gap-4
          lg:gap-8
        ">

          {categories.map((item) => (
            <div
              key={item.name}
              className="flex-1 relative text-center"
            >
              {/* 🔥 Card */}
              <div className="
                bg-[#F1F1F1]
                rounded-lg
                pt-20 pb-8
                px-6
              ">

                {/* 🔥 Image (floating) */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="
                    absolute
                    -top-12 left-1/2 -translate-x-1/2
                    w-[140px]
                    md:w-[160px]
                    lg:w-[180px]
                    drop-shadow-xl
                  "
                />

                {/* 🔥 Title */}
                <h3 className="
                  mt-6
                  text-[15px]
                  font-bold
                  tracking-[1px]
                ">
                  {item.name}
                </h3>

                {/* 🔥 CTA */}
                <Link
                  to={item.link}
                  className="
                    mt-3 inline-flex items-center gap-2
                    text-[13px] font-bold tracking-[1px]
                    text-black/50
                    hover:text-[#D87D4A]
                    transition
                  "
                >
                  SHOP
                  <span className="text-[#D87D4A]">›</span>
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}