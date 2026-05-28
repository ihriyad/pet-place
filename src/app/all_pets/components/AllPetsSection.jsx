"use client";

import React, { useState, useEffect, useRef } from "react";
import PetCard from "./PetCard";
import PetFilters from "./PetFilters";
import { searchPets } from "@/lib/actions";

const AllPetsSection = ({ pets: initialPets }) => {
  const [pets, setPets] = useState(initialPets);
  const [name, setName] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [loading, setLoading] = useState(false);

  const initialPetsRef = useRef(initialPets);
  useEffect(() => {
    if (!name && selectedSpecies.length === 0) {
      setPets(initialPetsRef.current);
      return;
    }

    setLoading(true);
    searchPets({ name, species: selectedSpecies }).then((data) => {
      setPets(data);
      setLoading(false);
    });
  }, [name, selectedSpecies, initialPets]);

  return (
    <div className="px-4 py-8">
      <PetFilters
        name={name}
        setName={setName}
        selectedSpecies={selectedSpecies}
        setSelectedSpecies={setSelectedSpecies}
      />
      {loading && (
        <p className="text-sm text-foreground-400 mb-4">Searching...</p>
      )}

      {!loading && pets.length === 0 && (
        <p className="text-sm text-foreground-400 text-center py-20">
          No pets found. Try a different search.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default AllPetsSection;
