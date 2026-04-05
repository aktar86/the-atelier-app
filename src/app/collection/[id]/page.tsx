import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import CartButton from "@/src/components/Buttons/CartButton";

// প্রোডাক্ট টাইপ ডিফাইন করা (টাইপ সেফটির জন্য)
interface Product {
  _id: string;
  product_name: string;
  price: string;
  image: string;
  description: string;
  material?: string;
  finish?: string;
  dimensions?: string;
  origin?: string;
}

// ডাটা ফেচিং ফাংশন
const getSingleProduct = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store", // ডাটা সবসময় আপডেট রাখার জন্য
    });

    if (!res.ok) return null;

    const result = await res.json();
    return result.product; // আপনার এপিআই 'product' কি-তে ডাটা পাঠাচ্ছে
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

const CollectionDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product: Product | null = await getSingleProduct(id);

  // যদি প্রোডাক্ট না পাওয়া যায় তবে 404 পেজ দেখাবে
  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto p-6 lg:py-20 flex flex-col lg:flex-row gap-12">
      {/* বাম পাশ: ইমেজ সেকশন */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-square overflow-hidden  bg-gray-100">
          <Image
            src={product.image}
            alt={product.product_name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ডান পাশ: প্রোডাক্ট ইনফরমেশন */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex-1">
          <nav className="text-sm text-gray-500 mb-4">
            Collection / {product.product_name}
          </nav>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            {product.product_name}
          </h1>

          <p className="text-3xl font-semibold text-blue-700 mb-6">
            {product.price}
          </p>

          <div className="border-t border-b border-gray-200 py-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-2 dark:text-white">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed dark:text-gray-400">
              {product.description}
            </p>
          </div>

          {/* স্পেসিফিকেশন টেবিল */}
          <div className="grid grid-cols-2 gap-y-4 text-sm mb-10">
            <div>
              <span className="block text-gray-400 uppercase tracking-wider text-xs">
                Material
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {product.material || "N/A"}
              </span>
            </div>
            <div>
              <span className="block text-gray-400 uppercase tracking-wider text-xs">
                Origin
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {product.origin || "N/A"}
              </span>
            </div>
            <div>
              <span className="block text-gray-400 uppercase tracking-wider text-xs">
                Dimensions
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {product.dimensions || "N/A"}
              </span>
            </div>
            <div>
              <span className="block text-gray-400 uppercase tracking-wider text-xs">
                Finish
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {product.finish || "N/A"}
              </span>
            </div>
          </div>
        </div>

        <CartButton productId={product._id}></CartButton>
      </div>
    </div>
  );
};

export default CollectionDetails;
