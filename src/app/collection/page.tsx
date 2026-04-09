import CollectionClient from "@/src/components/UI/CollectionClient";
import { poppins } from "@/src/lib/fonts";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "The Living Collection | Curated Furniture",
  description:
    "Explore our signature collection of hand-crafted furniture pieces. From architectural silhouettes to timeless modern interiors, discover masterpieces designed for your home.",
  openGraph: {
    title: "Curated Spaces for Architectural Living | The Atelier",
    description:
      "A selection of hand-crafted pieces where form meets heritage.",
    images: [
      {
        url: "/collection-banner.jpg", // public ফোল্ডারে একটি ভালো ব্যানার ইমেজ রাখুন
        width: 1200,
        height: 630,
        alt: "The Atelier Living Collection",
      },
    ],
  },
};

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
  price: string;
  material: string;
  finish: string;
  dimensions: string;
  origin: string;
  image: string;
  description: string;
  category: string;
  materials: string;
}

const CollectionPage = async () => {
  const products: Product[] = await getProducts();

  return (
    <div>
      <div className="flex flex-col-reverse  lg:flex-row justify-between py-10  ">
        {/* left */}
        <div className="space-y-5 max-w-2xl ">
          <small>The Living Collection</small>
          <h1 className="text-primary text-3xl md:text-4xl lg:text-6xl  font-semibold">
            Curated Spaces for Architectural Living.
          </h1>
          <p>
            A selection of hand-crafted pieces where form meets heritage.
            Explore our signature silhouettes designed for timeless modern
            interiors.
          </p>
        </div>
        {/* right  */}
        <div className=" pb-10 md:mb-0">
          <small className={`${poppins.className} mr-10`}>Displaying</small>{" "}
          <small className={`${poppins.className} font-semibold`}>
            {products.length} Masterpieces
          </small>
        </div>
      </div>

      <CollectionClient products={products}></CollectionClient>
    </div>
  );
};

export default CollectionPage;
