import { useParams } from "react-router-dom";

import CategoryProducts from "../../components/category/CategoryProducts";
import CategorySection from "../Home/components/CategorySection";
import BestGearSection from "../Home/components/BestGearSection";

export default function Category() {
  const { category } = useParams(); // 👈 dynamic route

  return (
    <>
      {/* 🔥 Page Title */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-3xl uppercase">
          {category}
        </h1>
      </section>

      {/* 🔥 Products (DYNAMIC) */}
      <CategoryProducts category={category} />

      {/* 🔥 Reusable sections */}
      <CategorySection />
      <BestGearSection />
    </>
  );
}