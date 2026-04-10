import React from "react";
import { getProducts } from "../collection/page";
import ProductCard from "@/src/components/Home/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Dining Collection | Exquisite Craftsmanship",
  description:
    "Discover our curated selection of hand-crafted dining furniture. From sculptural tables to tailored seating, explore signature pieces designed for architectural dining and timeless interiors.",
  openGraph: {
    title: "Timeless Dining Spaces | The Atelier",
    description:
      "A selection of hand-crafted dining pieces where form meets heritage.",
    images: [
      {
        url: "/dining-collection-banner.jpg", // নিশ্চিত করুন এই নামে আপনার public ফোল্ডারে ইমেজ আছে
        width: 1200,
        height: 630,
        alt: "The Atelier Dining Collection",
      },
    ],
  },
};

interface Product {
  _id: string;
  product_name: string;
  price: string;
  material: string;
  finish: string;
  dimensions: string;
  origin: string;
  image: string;
  description: string;
  category: string;
  materials: string;
}

const DiningPage = async () => {
  const allProducts = await getProducts();
  const filteredDining = allProducts.filter(
    (p: Product) => p.category === "Dining",
  );
  console.log("Dining Products", filteredDining);

  return (
    <section>
      <div>
        <div className="mb-10 max-w-2xl space-y-2">
          <p>The Dining Studio</p>
          <h2 className="text-5xl font-semibold text-primary">
            Exquisite Artistry for Shared Moments.
          </h2>
          <p>
            A curated range of dining furniture designed to celebrate the art of
            gathering. Experience the perfect blend of heirloom craftsmanship
            and contemporary design for your most cherished meals.
          </p>
        </div>
        <h3 className="my-5">
          Total Dining Collection ({filteredDining.length}){" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {filteredDining.map((product: Product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningPage;
