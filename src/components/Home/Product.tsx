"use client";

import Image from "next/image";
import Link from "next/link";

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
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { _id, image, product_name, finish, price } = product;

  return (
    <Link href={`/collection/${_id}`}>
      <div className="">
        {/* image box */}
        <div className="relative h-120 w-full bg-gray-200 overflow-hidden ">
          <Image
            src={image}
            alt={product_name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* content part */}
        <div className="mt-5">
          <h3 className="font-bold text-xl">{product_name}</h3>
          <div className="flex justify-between items-center">
            <p>{finish}</p>
            <h3 className="font-bold text-xl">{price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
