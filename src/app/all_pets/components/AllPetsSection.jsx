"use client";

import React from "react";
import PetCard from "./PetCard";

const AllPetsSection = ({ pets }) => {
  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default AllPetsSection;
