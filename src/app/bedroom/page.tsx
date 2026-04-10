import { Button } from "@/components/ui/button";
import { getProducts } from "../collection/page";
import ProductCard from "@/src/components/Home/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Bedroom Collection | Timeless Sanctuaries",
  description:
    "Explore our signature bedroom collection of hand-crafted beds and essentials. From architectural forms to serene modern interiors, discover masterpieces designed for your personal retreat.",
  openGraph: {
    title: "Sanctuaries for Architectural Living | The Atelier",
    description:
      "A selection of hand-crafted bedroom pieces where comfort meets heritage.",
    images: [
      {
        url: "/bedroom-collection-banner.jpg", // আপনার public ফোল্ডারের ইমেজ পাথ অনুযায়ী পরিবর্তন করুন
        width: 1200,
        height: 630,
        alt: "The Atelier Bedroom Collection",
      },
    ],
  },
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

const BedroomPage = async () => {
  const allProducts = await getProducts();
  const filteredbedroom = allProducts.filter(
    (p: Product) => p.category === "Bedroom",
  );
  return (
    <section>
      <div>
        <div className="mb-10 max-w-2xl space-y-2">
          <p>The Bedroom Collection</p>
          <h2 className="text-5xl font-semibold text-primary">
            Sanctuaries of Serene Comfort.
          </h2>
          <p>
            A curated selection of hand-crafted beds and nightstands where soft
            textures meet architectural precision. Create a timeless retreat
            designed for rest, heritage, and modern living.
          </p>
        </div>
        <h3 className="my-5">
          Total Bedroom Collection ({filteredbedroom.length}){" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {filteredbedroom.map((product: Product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BedroomPage;
