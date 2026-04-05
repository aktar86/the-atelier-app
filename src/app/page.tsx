import FurnitureData from "../components/UI/FurnitureData";
import ClientSession from "../components/UI/ClientSession";
import { authOptions } from "../lib/authOptions";
import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";

// accordion data
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HomeBanner from "../components/Home/Banner";

import { cookies } from "next/headers";
import ProductCard from "../components/Home/Product";
import Link from "next/link";
import OurHeritage from "../components/Home/OurHeritage";

const getProducts = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  // Get cookies from the current request
  const cookieStore = await cookies();

  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
    headers: {
      Cookie: cookieStore.toString(), // Forward all cookies
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data.data;
};

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

export default async function Home() {
  const session = await getServerSession(authOptions);
  const products: Product[] = await getProducts();
  const trimProducts: Product[] = products.slice(0, 3);

  return (
    <div>
      {/* banner */}
      <HomeBanner></HomeBanner>
      {/* feature products */}
      <FurnitureData trimProducts={trimProducts}></FurnitureData>

      {/* our heritage */}
      <OurHeritage></OurHeritage>
    </div>
  );
}
