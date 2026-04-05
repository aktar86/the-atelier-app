import { poppins } from "@/src/app/layout";
import ProductCard from "../Home/Product";
import Link from "next/link";

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
}

interface FurnitureDataProps {
  trimProducts: Product[];
}

const FurnitureData = ({ trimProducts }: FurnitureDataProps) => {
  return (
    <section className="border my-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-12 sm:py-20 gap-4">
        <span>
          <h2 className="font-semibold text-2xl sm:text-3xl">
            Masterpiece Editions
          </h2>
          <p className={`${poppins.className} font-light`}>
            Carefully selected highlights from our seasonal curation.
          </p>
        </span>

        <span className="relative">
          <Link
            href="/collection"
            className="text-primary hover:opacity-90 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.5px] after:w-full after:bg-primary after:hover:opacity-90"
          >
            View All Pieces
          </Link>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {trimProducts.map((product) => (
          <div key={product._id} className="lg:nth-[3n-1]:mt-10 sm:mt-0">
            <ProductCard product={product}></ProductCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FurnitureData;
