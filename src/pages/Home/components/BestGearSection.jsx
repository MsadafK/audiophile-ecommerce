import bestGearDesktop from "/assets/shared/desktop/image-best-gear.jpg";
import bestGearTablet from "/assets/shared/tablet/image-best-gear.jpg";
import bestGearMobile from "/assets/shared/mobile/image-best-gear.jpg";

export default function BestGearSection() {
  return (
    <section className="container my-24 my-32">

      <div className="
        flex flex-col gap-10
        lg:flex-row lg:items-center lg:gap-16
      ">

        {/* 🔥 IMAGE (mobile first) */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden lg:order-2">
          <picture>
            <source media="(min-width:1024px)" srcSet={bestGearDesktop} />
            <source media="(min-width:768px)" srcSet={bestGearTablet} />
            <img
              src={bestGearMobile}
              alt="Best Gear"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        {/* 🔥 TEXT */}
        <div className="
          lg:w-1/2
          text-center lg:text-left
        ">

          {/* Heading */}
          <h2 className="
            font-bold uppercase text-black
            text-[28px] leading-[36px]
            md:text-[40px] md:leading-[44px]
            tracking-[1px]
            mb-8
          ">
            Bringing you the{" "}
            <span className="text-[#D87D4A]">best</span>{" "}
            audio gear
          </h2>

          {/* Paragraph */}
          <p className="
            text-black/60
            text-[15px] leading-[25px]
            max-w-[540px]
            mx-auto lg:mx-0
          ">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>

        </div>

      </div>
    </section>
  );
}