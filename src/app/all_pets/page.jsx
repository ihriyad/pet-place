import AllPetsSection from "@/app/all_pets/components/AllPetsSection";
import { getAllPets } from "@/lib/actions";
import React from "react";

const AllPetsPage = async () => {
  const pets = await getAllPets();
  console.log(pets, "all pets data");
  return <AllPetsSection pets={pets}></AllPetsSection>;
};

export default AllPetsPage;
