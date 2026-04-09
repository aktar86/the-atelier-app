"use client";
import { useState } from "react";
import ProductCard from "@/src/components/Home/Product";

interface Product {
  _id: string;
  product_name: string;
  price: string; // আপনার ডেটাতে '$1,750.00' স্ট্রিং আছে
  material: string;
  finish: string;
  dimensions: string;
  origin: string;
  image: string;
  description: string;
  category: string;
  materials: string;
}

interface CollectionClientProps {
  products: Product[];
}

const CollectionClient = ({ products }: CollectionClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // category count (ei reduce akta obj return korbe etake array banate hobe)
  const categoryCount = products.reduce<Record<string, number>>(
    (acc, product) => {
      const cat = product.category;
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    },
    {},
  );
  const categories: string[] = ["All", ...Object.keys(categoryCount)];

  // all materials
  const allMaterials: string[] = Array.from(
    new Set(products.flatMap((p) => p.materials || [])),
  );

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className=" w-full md:w-64 space-y-10 ">
        <div>
          <h3 className="text-2xl mb-6 border-b pb-2">Categories</h3>
          <ul className="space-y-4">
            {categories.map((cat, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`flex justify-between items-center cursor-pointer transition-all ${cat === selectedCategory ? "font-bold text-primary dark:text-white border-l-4 border-primary pl-2" : "text-gray-500 hover:text-primary"}`}
              >
                <span>{cat}</span>
                <span>
                  {cat === "All" ? products.length : categoryCount[cat]}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* material */}
        <div>
          <h3 className="text-2xl mb-6 border-b pb-2">Materials</h3>
          <div className="flex flex-wrap gap-2">
            {allMaterials.map((mat, index) => (
              <button
                type="button"
                key={index}
                suppressHydrationWarning={true}
                className="px-3 py-1 bg-gray-100 text-[13px] tracking-widest uppercase hover:bg-black hover:text-white dark:bg-white dark:text-black transition-colors"
              >
                {mat}
              </button>
            ))}
          </div>
        </div>

        {/* all products */}
      </aside>
      {/* Product List */}
      <section className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <div
              key={product._id}
              className={index % 3 === 1 ? "lg:mt-10" : ""}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollectionClient;
