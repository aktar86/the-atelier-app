import { poppins } from "@/src/app/layout";
import Image from "next/image";
import React from "react";

const OurHeritage = () => {
  return (
    <section className="py-10 lg:py-20 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
        {/* Image Box */}
        <div className="w-full lg:flex-1 relative h-[300px] md:h-[450px] lg:h-[550px] bg-gray-500">
          <Image
            src="/heritage.jpg"
            alt="heritage img"
            fill
            className="object-cover"
          />

          {/* Floating 1954 Box */}
          <div className="absolute -right-4 -bottom-4 md:-right-10 md:-bottom-10 h-auto w-auto bg-white dark:bg-gray-900 shadow-lg">
            <div className="p-6 md:px-8 md:py-10">
              <h1 className="text-3xl md:text-4xl font-normal text-primary mb-2 leading-none">
                1954
              </h1>
              <p
                className={`${poppins.className} text-[10px] md:text-[13px] tracking-widest text-[#5C6370] uppercase`}
              >
                Established in Milan
              </p>
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div className="w-full lg:flex-1 mt-10 lg:mt-0">
          <div className="space-y-4 md:space-y-6">
            <p
              className={`${poppins.className} text-[12px] md:text-[13px] tracking-widest text-[#5C6370] uppercase`}
            >
              Our Legacy
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Craftsmanship Over Convenience
            </h1>

            <p
              className={`${poppins.className} text-base md:text-lg text-light text-[#5C6370] leading-relaxed`}
            >
              Founded on the principle that furniture should be an heirloom, not
              a commodity. We partner with third-generation artisans who
              understand the soul of the material.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              Our atelier is a space where traditional joinery meets avant-garde
              design. We dont just furnish spaces; we define the atmosphere of
              home.
            </p>

            <button
              type="button"
              suppressHydrationWarning={true}
              className="w-full sm:w-auto px-10 py-3 border border-gray-200 bg-secondary hover:bg-primary hover:text-white transition"
            >
              The Heritage Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHeritage;
