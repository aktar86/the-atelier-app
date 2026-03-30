"use client";

import { useRouter } from "next/navigation";

const CartButton = () => {
  const router = useRouter();
  const status = true;

  const handleAddCart = () => {
    alert("cart button clicked");
    if (status) {
      return router.push("/login");
    }
  };
  return (
    <button
      onClick={handleAddCart}
      type="button"
      className="mt-5 w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200 active:scale-95 transform"
    >
      কার্টে যোগ করুন
    </button>
  );
};

export default CartButton;
