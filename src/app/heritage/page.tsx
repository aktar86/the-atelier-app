import { inter } from "@/src/lib/fonts";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";

const HeritagePage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border my-20">
        <div className="lg:col-span-7">
          <span className="label-md uppercase tracking-[0.2em] text-gray-400 mb-6 block">
            Our Heritage
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface leading-[1.1] tracking-tighter mb-8">
            Spaces defined by{" "}
            <span className="italic font-normal">quiet authority</span>.
          </h1>
        </div>
        <div className="lg:col-span-5 pb-4">
          <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-md">
            We believe furniture is more than utility. It is an architectural
            dialogue between form and soul, crafted for the discerning eye.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
        <div className=" border">
          <div className="relative  group aspect-4/5 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              alt="Close-up of artisan hand-carving dark walnut wood with precise tools in a sunlit dusty workshop environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpHUDEfe_1dI4QKOG60gwx2C3vIUOa3haBW0t2mDtkgkEvJ9g8kDq4ZHAgvucVUZ_qqTXdxJ39z2eU56OWziLCNm7k3lZxZAky3Y_s_CyVWeOxWsQTC4NV7v2yXGVdndS9H974nAIOEds8KdojgK8tsZT8ZYzrB1hCIFn5ZfkA-hlgIirbj_11cId7S8BHLG7cMJphnskyLj1mkyP3heQcZiQs9DcW-14uDh4JJPzTHB3Pb7uFuaz752vuwJ_MJIXoJPkf5RXIr0DK"
            />
            <div className="absolute bottom-8 left-8 bg-surface-container-lowest/60 backdrop-blur-md px-6 py-4">
              <span className="text-xs font-label tracking-widest uppercase">
                The Workshop, Est. 1984
              </span>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-headline font-bold">
            The Pursuit of the Perfect Join
          </h1>
          <div className="space-y-6 text-on-surface-variant">
            <p className="leading-relaxed">
              Each piece at The Atelier begins with a conversation between the
              artisan and the material. We source our timber from sustainable
              forests where trees are selected for their unique grain
              narratives.
            </p>
            <p className="leading-relaxed">
              Our commitment to craftsmanship is uncompromising. We reject the
              ephemeral nature of mass production in favor of traditional
              joinery techniques that ensure each table, chair, and cabinet is a
              legacy piece, designed to endure for generations.
            </p>
            <div className="pt-8">
              <button
                type="button"
                className="inline-flex items-center gap-4 text-primary font-medium group"
              >
                <span className="border-b border-primary pb-1">
                  Discover Our Process
                </span>
                <span className=" text-sm transition-transform group-hover:translate-x-2">
                  <FaArrowAltCircleRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Showroom Locator Header  */}
      <div className="bg-surface-container-low py-24 px-8 md:px-16">
        <div className="  text-center">
          <span className="label-md uppercase tracking-[0.2em] text-secondary mb-4 block">
            Visit Us
          </span>
          <h2 className="text-5xl font-headline font-bold mb-12">
            Global Showrooms
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-16">
            Experience the tactility of our collections in person. Our curators
            are available for private consultations at any of our flagship
            locations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeritagePage;
