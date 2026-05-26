import React, { Suspense } from "react";
import { getAllPets } from "@/lib/actions";
import SliderWrapper from "./SliderWrapper";

const FeaturedPets = async () => {
  const allPets = await getAllPets();

  const featuredList = allPets?.slice(0, 6) || [];

  if (featuredList.length === 0) return null;

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-warning bg-warning/10 px-3 py-1 rounded-full">
              Spotlight Listings
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-3">
              Featured Companions
            </h2>
          </div>
          <p className="text-foreground-500 max-w-md text-sm md:text-base">
            Meet our highly requested residents who are urgently searching for
            their permanent, loving setups.
          </p>
        </div>
        <Suspense fallback={<>Loading featured...</>}>
          <SliderWrapper pets={featuredList} />
        </Suspense>
      </div>
    </section>
  );
};

export default FeaturedPets;
