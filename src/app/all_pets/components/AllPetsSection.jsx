"use client";

import React, { useState, useEffect, useRef } from "react";
import PetCard from "./PetCard";
import PetFilters from "./PetFilters";
import { searchPets } from "@/lib/actions";
import { Pagination } from "@heroui/react";

const ITEMS_PER_PAGE = 8;

const AllPetsSection = ({ pets: initialPets }) => {
  const [pets, setPets] = useState(initialPets);
  const [name, setName] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const initialPetsRef = useRef(initialPets);

  useEffect(() => {
    if (!name && selectedSpecies.length === 0) {
      setPets(initialPetsRef.current);
      return;
    }

    setLoading(true);
    searchPets({ name, species: selectedSpecies }).then((data) => {
      setPets(data);
      setCurrentPage(1);
      setLoading(false);
    });
  }, [name, selectedSpecies, initialPets]);

  const totalPages = Math.ceil(pets.length / ITEMS_PER_PAGE);
  const currentPets = pets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      {!loading && pets.length > 0 && (
        <p className="text-sm text-foreground-400 mb-4">
          Showing{" "}
          <span className="text-warning font-semibold">
            {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
            {Math.min(currentPage * ITEMS_PER_PAGE, pets.length)}
          </span>{" "}
          of <span className="text-warning font-semibold">{pets.length}</span>{" "}
          pets
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentPets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <Pagination className="justify-center">
            <Pagination.Content>
              {/* Previous Button */}
              <Pagination.Item>
                <Pagination.Previous
                  isDisabled={currentPage === 1}
                  onPress={() => handlePageChange(currentPage - 1)}
                >
                  <Pagination.PreviousIcon />
                  <span>Previous</span>
                </Pagination.Previous>
              </Pagination.Item>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Pagination.Item key={p}>
                  <Pagination.Link
                    isActive={p === currentPage}
                    onPress={() => handlePageChange(p)}
                  >
                    {p}
                  </Pagination.Link>
                </Pagination.Item>
              ))}

              {/* Next Button */}
              <Pagination.Item>
                <Pagination.Next
                  isDisabled={currentPage === totalPages}
                  onPress={() => handlePageChange(currentPage + 1)}
                >
                  <span>Next</span>
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default AllPetsSection;
