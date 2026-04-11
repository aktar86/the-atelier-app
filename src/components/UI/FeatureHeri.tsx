import React from "react";
import { Leaf, DraftingCompass, Truck, ShieldCheck } from "lucide-react";

const FeatureHeri = () => {
  const features = [
    {
      title: "CIRCULAR ETHICS",
      description:
        "Our 'Eternal Exchange' program ensures no Atelier piece ever enters a landfill.",
      icon: <Leaf size={24} strokeWidth={1.5} />,
    },
    {
      title: "CUSTOM ATELIER",
      description:
        "Bespoke modifications tailored to the unique geometry of your space.",
      icon: <DraftingCompass size={24} strokeWidth={1.5} />,
    },
    {
      title: "WHITE GLOVE",
      description:
        "In-house installation teams trained in the structural nuances of our collection.",
      icon: <Truck size={24} strokeWidth={1.5} />,
    },
    {
      title: "25-YEAR BOND",
      description:
        "A structural guarantee that mirrors the enduring nature of our materials.",
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    },
  ];
  // bg-[#F9F7F2]
  return (
    <section className=" bg-[#F9F7F2] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {features.map((item, index) => (
            <div key={index} className="space-y-4   p-5">
              {/* Icon Container */}
              <div className="text-[#4A4A4A]">{item.icon}</div>

              {/* Title */}
              <h3 className="text-sm font-bold tracking-widest text-[#1A1A1A] uppercase">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#5A5A5A] leading-relaxed max-w-[250px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHeri;
