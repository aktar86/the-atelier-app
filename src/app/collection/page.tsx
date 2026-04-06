import CollectionClient from "@/src/components/UI/CollectionClient";
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
      <div className="flex flex-col-reverse  md:flex-row justify-between py-10 ">
        {/* left */}
        <div className="space-y-3 max-w-2xl border">
          {" "}
          <small>The Living Collection</small>
          <h1 className="text-primary text-5xl  font-semibold">
            Curated Spaces for Architectural Living.
          </h1>
          <p>
            A selection of hand-crafted pieces where form meets heritage.
            Explore our signature silhouettes designed for timeless modern
            interiors.
          </p>
        </div>
        {/* right  */}
        <div className="mb-10 md:mb-0">
          <small>Displaying</small>
          <small>{products.length} Masterpieces</small>
        </div>
      </div>

      <CollectionClient products={products}></CollectionClient>
    </div>
  );
};

export default CollectionPage;
