// app/collection/page.tsx
import ProductCard from "@/src/components/Home/Product";
import { cookies } from "next/headers";

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

const CollectionPage = async () => {
  const products: Product[] = await getProducts();
  console.log(products);

  return (
    <div>
      {/* Your UI */}
      {products.length}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product._id} className="lg:nth-[3n-1]:mt-10  sm:mt-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
