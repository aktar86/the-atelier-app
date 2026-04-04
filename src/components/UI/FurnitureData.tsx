import React from "react";
import Furnitures from "@/src/data/furniture.json";
import CartButton from "../Buttons/CartButton";

const FurnitureData = () => {
  return (
    <div className="container mx-auto p-6">
      {/* মোট পণ্যের সংখ্যা দেখানোর জন্য */}
      <h2 className="mb-6 text-4xl font-bold text-gray-800 text-center ">
        মোট ফার্নিচার: {Furnitures.length} টি
      </h2>

      {/* গ্রিড লেআউট */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Furnitures.map((item) => (
          <div
            key={item.id}
            className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* কন্টেন্ট সেকশন */}
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-widest">
                {item.category}
              </p>
              <h3 className="mt-1 text-lg font-bold text-gray-800 line-clamp-1">
                {item.productName}
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-extrabold text-gray-900">
                  ৳{item.price}
                </span>
                <div className="flex items-center text-yellow-500 text-sm">
                  <span>★</span>
                  <span className="ml-1 text-gray-600 font-medium">
                    {item.rating}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-gray-500 text-sm line-clamp-2 flex-grow">
                {item.description}
              </p>

              {/* অ্যাকশন বাটন */}
              <CartButton
                productId={item.id}
                productName={item.productName}
                price={item.price}
                category={item.category}
              ></CartButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureData;
