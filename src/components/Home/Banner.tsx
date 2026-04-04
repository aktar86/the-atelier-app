import { Button } from "@/components/ui/button";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="flex justi-between items-center">
      {/* content */}
      <div className="flex-1">
        <p>New Collection 2024</p>
        <h1 className="font-bold text-6xl">
          The <br /> Sculptural <br /> Form
        </h1>
        <p>
          A curated selection of archival pieces redefined for contemporary
          living. Each silhouette is a dialogue between organic material and
          mathematical precision.
        </p>
        <Button variant="default">Explore Collection</Button>
      </div>
      {/* image */}
      <div className="relative flex-1">
        <div className="h-full w-full bg-amber-100 z-999 relative">
          image box
        </div>
        <div className="h-full w-full bg-amber-200 z-10 absolute top-5 left-5">
          box 2
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
