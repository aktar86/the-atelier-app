import { poppins } from "@/src/app/layout";
import Image from "next/image";
import React from "react";

const OurHeritage = () => {
  return (
    <section className="py-20 border">
      <div className="flex justify-between items-center gap-30 h-150 ">
        {/* image box  */}
        <div className="flex-1 relative h-full bg-gray-500 ">
          <Image
            src="/heritage.jpg"
            alt="heritage img"
            fill
            className="object-cover"
          ></Image>
          <div className="absolute -right-10 -bottom-10 h-60 w-60 bg-white dark:bg-gray-900 shadow-lg">
            <div className=" px-8 py-10 my-25 ">
              <h1 className="text-4xl font-normal text-primary mb-2 leading-none">
                1954
              </h1>

              <p
                className={`${poppins.className} text-[13px] tracking-widest text-[#5C6370] uppercase`}
              >
                Established in Milan
              </p>
            </div>
          </div>
        </div>
        {/* content box */}
        <div className="flex-1  h-full">
          <div className="lg:mt-20 space-y-3">
            <p
              className={`${poppins.className} text-[13px] tracking-widest text-[#5C6370] uppercase`}
            >
              Our Legacy
            </p>

            <h1 className="text-5xl font-semibold">
              Craftsmanship Over Convenience
            </h1>
            <p
              className={`${poppins.className} text-lg text-light  text-[#5C6370] `}
            >
              Founded on the principle that furniture should be an heirloom, not
              a commodity. We partner with third-generation artisans who
              understand the soul of the material.
              <br />
              <br />
              Our atelier is a space where traditional joinery meets avant-garde
              design. We don't just furnish spaces; we define the atmosphere of
              home.
            </p>

            <button
              type="button"
              className="px-10 py-3 border border-gray-200 bg-secondary hover:bg-primary hover:text-white transition "
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
