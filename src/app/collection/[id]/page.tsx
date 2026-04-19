import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import CartButton from "@/src/components/Buttons/CartButton";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | The Atelier",
    };
  }

  return {
    title: `${product.product_name} | The Atelier`,
    description: product.description.slice(0, 160), // ডেসক্রিপশন ১৬০ ক্যারেক্টারের মধ্যে রাখা ভালো
    openGraph: {
      title: product.product_name,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.product_name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.product_name,
      description: product.description,
      images: [product.image],
    },
  };
}

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
// ডাটা ফেচিং ফাংশন
const getSingleProduct = async (id: string) => {
  try {
    // এনভায়রনমেন্ট ভেরিয়েবল থেকে বেজ ইউআরএল নেওয়া, না থাকলে লোকালহোস্ট ব্যবহার করা
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/products/${id}`, {
      cache: "no-store", // প্রোডাকশনে লেটেস্ট ডাটা নিশ্চিত করার জন্য
    });

    // রেসপন্স চেক করা
    if (!res.ok) {
      console.error(`Failed to fetch product: ${res.status}`);
      return null;
    }

    const result = await res.json();

    // আপনার এপিআই রেসপন্স অনুযায়ী 'product' কি-টি রিটার্ন করা
    return result.product;
  } catch (error) {
    // কোনো নেটওয়ার্ক বা সার্ভার এরর হলে কনসোলে লগ দেখাবে
    console.error("Fetch error details:", error);
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
