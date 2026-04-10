"use client";

import React, { useState } from "react";
import { FiShoppingCart, FiLoader } from "react-icons/fi";

interface CartButtonProps {
  productId: string;
}

const CartButton = ({ productId }: CartButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);

    try {
      // এখানে আপনার কার্ট এপিআই কল হবে
      console.log("Adding to cart, Product ID:", productId);

      // একটি কৃত্রিম বিলম্ব (Simulation)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Cart error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className={`flex items-center justify-center gap-2 px-6 py-3  font-bold transition-all active:scale-95 
        ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary hover:opacity-90 text-white dark:text-black"
        }`}
    >
      {loading ? (
        <FiLoader className="animate-spin w-5 h-5" />
      ) : 
        <FiShoppingCart className="w-5 h-5" />
      )}
      <span>{loading ? "Adding..." : "Add to Cart"}</span>
    </button>
  );
};

export default CartButton;
