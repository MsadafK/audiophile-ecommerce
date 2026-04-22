import { Link } from "react-router-dom";
import products from "../../data/products.json";

export default function CategoryProducts({ category }) {

  // ✅ Filter + sort (new product top pe)
  const filteredProducts = products
    .filter((item) => item.category === category)
    .sort((a, b) => b.new - a.new);

  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col gap-24">

        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="
              flex flex-col gap-8
              lg:grid lg:grid-cols-2 lg:items-center lg:gap-24
            "
          >
            {/* 🔥 IMAGE */}
            <div
              className={`
                bg-[#F1F1F1] rounded-lg flex items-center justify-center
                h-[300px] md:h-[400px] lg:h-[560px]
                ${index % 2 === 1 ? "lg:order-2" : ""}
              `}
            >
              <img
                src={product.categoryImage.desktop}
                alt={product.name}
                className="max-h-[80%] object-contain"
              />
            </div>

            {/* 🔥 TEXT */}
            <div
              className={`
                text-center lg:text-left
                max-w-[350px] md:max-w-[450px] lg:max-w-[445px]
                mx-auto lg:mx-0
                ${index % 2 === 1 ? "lg:order-1" : ""}
              `}
            >
              {/* NEW PRODUCT */}
              {product.new && (
                <p className="uppercase text-[14px] tracking-[10px] text-[#D87D4A] mb-4">
                  NEW PRODUCT
                </p>
              )}

              {/* TITLE */}
              <h2 className="text-[28px] md:text-[40px] font-bold leading-tight mb-6">
                {product.name}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-black/60 mb-8">
                {product.description}
              </p>

              {/* BUTTON */}
              <Link
                to={`/product/${product.slug}`}
                className="btn-primary inline-block"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}