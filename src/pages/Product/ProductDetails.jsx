import { useParams, Link } from "react-router-dom";
import products from "../../data/products.json";
import CategorySection from "../Home/components/CategorySection";
import BestGearSection from "../Home/components/BestGearSection";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  return (
    <section className="py-10 md:py-16">
      <div className="container">

        {/* 🔙 GO BACK */}
        <button
          onClick={() => window.history.back()}
          className="text-black/60 mb-10"
        >
          Go Back
        </button>

        {/* 🔥 TOP SECTION */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* IMAGE */}
          <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center h-[350px] lg:h-[560px]">
            <picture>
                <source media="(min-width:1024px)" srcSet={product.image.desktop} />
                <source media="(min-width:768px)" srcSet={product.image.tablet} />
                <img src={product.image.mobile} alt={product.name} />
            </picture>
          </div>

          {/* TEXT */}
          <div>
            {product.new && (
              <p className="text-[#D87D4A] uppercase tracking-[10px] text-sm mb-4">
                New Product
              </p>
            )}

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {product.name}
            </h1>

            <p className="text-black/60 mb-6">
              {product.description}
            </p>

            <p className="font-bold text-lg mb-6">
              $ {product.price}
            </p>

            {/* ADD TO CART */}
            <div className="flex gap-4">
              <div className="flex items-center bg-[#F1F1F1] px-4 py-2 gap-4">
                <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>
                    -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(prev => prev + 1)}>
                    +
                </button>
              </div>
              <button 
                className="btn-primary"
                onClick={() => {
                    console.log("clicked");
                    console.log("adding", product, quantity);
                    addToCart(
                        {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image.desktop
                        },
                        quantity
                    );

                    setQuantity(1); // 🔥 reset
                    }}
                >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* 🔥 FEATURES + BOX */}
        <div className="grid gap-10 mt-20 lg:grid-cols-2">

          {/* FEATURES */}
          <div>
            <h2 className="font-bold text-xl mb-6">FEATURES</h2>
            <p className="text-black/60 whitespace-pre-line">
              {product.features}
            </p>
          </div>

          {/* IN THE BOX */}
          <div>
            <h2 className="font-bold text-xl mb-6">IN THE BOX</h2>

            <ul className="space-y-2">
              {product.includes.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-[#D87D4A] font-bold">
                    {item.quantity}x
                  </span>
                  <span className="text-black/60">
                    {item.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🔥 GALLERY */}
        <div className="grid gap-5 mt-20 lg:grid-cols-2">
          
          <div className="flex flex-col gap-5">
            <img src={product.gallery.first.desktop} className="rounded-lg" />
            <img src={product.gallery.second.desktop} className="rounded-lg" />
          </div>

          <img
            src={product.gallery.third.desktop}
            className="rounded-lg h-full object-cover"
          />
        </div>

        {/* 🔥 YOU MAY ALSO LIKE */}
        <div className="mt-20 text-center">
          <h2 className="font-bold text-xl mb-10">
            YOU MAY ALSO LIKE
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {product.others.map((item, i) => (
              <div key={i}>
                <div className="bg-[#F1F1F1] p-10 rounded-lg">
                  <img src={item.image.desktop} alt="" />
                </div>

                <h3 className="mt-6 font-bold">{item.name}</h3>

                <Link
                  to={`/product/${item.slug}`}
                  className="inline-block mt-4 bg-[#D87D4A] text-white px-6 py-3"
                >
                  SEE PRODUCT
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 🔥 REUSABLE SECTIONS */}
      <CategorySection />
      <BestGearSection />
    </section>
  );
}