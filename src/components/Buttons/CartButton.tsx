"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface CartButtonProps {
  productId: number;
  productName: string;
  price: number;
  category: string;
}

const CartButton = ({
  productId,
  productName,
  price,
  category,
}: CartButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    alert("এই ফিচারটি এখনও ডেভেলপমেন্ট পর্যায়ে আছে।");
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      type="button"
      className="mt-5 w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200 active:scale-95 transform disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "যোগ করা হচ্ছে..." : "কার্টে যোগ করুন"}
    </button>
  );
};

export default CartButton;
