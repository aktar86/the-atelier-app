"use client";

import { Button } from "@/components/ui/button";
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
    <>
      <Button onClick={handleAddToCart} disabled={isLoading}>
        {" "}
        {isLoading ? "যোগ করা হচ্ছে..." : "কার্টে যোগ করুন"}
      </Button>
    </>
  );
};

export default CartButton;
