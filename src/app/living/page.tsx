import ProductCard from "@/src/components/Home/Product";
import { getProducts } from "../collection/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Living Collection | Curated Spaces for Architectural Living",
  description:
    "Explore our signature silhouettes designed for timeless modern interiors. A selection of hand-crafted pieces where form meets heritage, crafted for the heart of your home.",
  openGraph: {
    title: "Curated Spaces for Architectural Living | The Atelier",
    description:
      "Hand-crafted furniture pieces where form meets heritage. Discover our signature living collection.",
    images: [
      {
        url: "/living-collection-banner.jpg", // আপনার লিভিং সেকশনের ব্যানার ইমেজ পাথটি এখানে দিন
        width: 1200,
        height: 630,
        alt: "The Atelier Living Collection",
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

const LivingPage = async () => {
  const allProducts = await getProducts();
  const filteredLiving = allProducts.filter(
    (product: Product) => product.category === "Living",
  );
  console.log(filteredLiving);
  return (
    <div>
      <div className="mb-10 max-w-2xl space-y-2">
        <p>The Living Series</p>
        <h2 className="text-5xl font-semibold text-primary">
          Sophisticated Design for Everyday Luxury.
        </h2>
        <p>
          A thoughtful selection of sofas, loungers, and accents where clean
          lines meet timeless textures. Elevate your living space with
          silhouettes designed for both style and serenity.
        </p>
      </div>

      <h4>Total Living Collection {filteredLiving.length}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {filteredLiving.map((product: Product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default LivingPage;
