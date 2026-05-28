"use client";

import React from "react";
import { Button, Input } from "@heroui/react";

const species = ["Dog", "Cat", "Bird", "Rabbit", "Hamster", "Other"];

const PetFilters = ({ name, setName, selectedSpecies, setSelectedSpecies }) => {
  const toggleSpecies = (s) => {
    setSelectedSpecies((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  };

  const handleClearAll = () => {
    setName("");
    setSelectedSpecies([]);
  };

  return (
    <div className="bg-background rounded-2xl flex flex-col gap-4 mb-8">
      <div className="mx-auto max-w-3xl p-6 space-y-3">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search by name..."
          variant="bordered"
          radius="full"
          className="w-full"
        />

        <div className="flex flex-wrap gap-2">
          {species.map((s) => (
            <Button
              variant="secondary"
              key={s}
              type="button"
              onClick={() => toggleSpecies(s)}
              className={`px-4 py-1.5 rounded-md text-warning font-semibold transition-colors
              ${
                selectedSpecies.includes(s)
                  ? "bg-warning/20 text-warning border-warning/40"
                  : "bg-background text-foreground-500 border-divider hover:border-warning/40 hover:text-warning"
              }`}
            >
              {s}
            </Button>
          ))}

          {(name || selectedSpecies.length > 0) && (
            <Button
              variant="ghost"
              type="button"
              onClick={handleClearAll}
              className="px-4 py-1.5 rounded-md font-semibold text-danger "
            >
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetFilters;
