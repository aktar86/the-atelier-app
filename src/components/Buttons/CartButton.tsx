"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const CartButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);

    if (status == "authenticated") {
      alert("Item added to cart!");
      setIsLoading(false);
    } else {
      router.replace(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      type="button"
      className="mt-5 w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200 active:scale-95 transform"
    >
      কার্টে যোগ করুন
    </button>
  );
};

export default CartButton;
