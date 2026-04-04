import { Button } from "@/components/ui/button";
import { poppins } from "@/src/app/layout";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="flex justi-between items-center">
      {/* content */}
      <div className="flex-1 space-y-3">
        <p className={`${poppins.className} font-light`}>New Collection 2024</p>
        <h1 className="font-bold text-6xl">
          The Sculptural <br /> Form
        </h1>
        <p className={`${poppins.className} font-light max-w-125 py-5`}>
          A curated selection of archival pieces redefined for contemporary
          living. Each silhouette is a dialogue between organic material and
          mathematical precision.
        </p>

        <Link
          href="/"
          className="px-7 py-3 mt-5 bg-primary dark:text-secondary text-white"
        >
          {" "}
          Explore Collection
        </Link>
      </div>
      {/* image */}
      <div className=" flex-1 p-10">
        <div className="relative h-108 border">
          {/* সামনের বক্স (Image Box) */}
          <div className="h-full w-full overflow-hidden  bg-amber-100 z-20 relative">
            <Image
              src="/banner.jpg"
              alt="Banner"
              fill
              className="object-cover"
            />
          </div>
          {/* পেছনের বক্স (Box 2) */}
          <div className="h-full w-full bg-amber-200 z-10 absolute top-10 left-10">
            box 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
