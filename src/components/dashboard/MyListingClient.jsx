"use client";
import { deletePet } from "@/lib/actions";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPaw } from "react-icons/fa";

const MyListingClient = ({ pets, email }) => {
  const router = useRouter();
  if (pets.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center text-warning text-xl mx-auto mb-4">
          <FaPaw />
        </div>
        <p className="text-foreground font-semibold mb-1">No listings yet</p>
        <p className="text-sm text-foreground-400">
          Pets you list for adoption will show up here.
        </p>
      </div>
    );
  const handleDelete = async (id) => {
    const data = await deletePet(id, email);
    if (data.deletedCount === 1) {
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-foreground">My Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-background border border-divider rounded-xl overflow-hidden shadow-sm"
          >
            <div className="relative w-full h-44">
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="font-bold text-foreground">{pet.petName}</p>
              <p className="text-xs text-foreground-400 mt-0.5">
                {pet.species} · {pet.breed}
              </p>
              <p className="text-xs text-foreground-400">{pet.location}</p>
              <Button
                size="sm"
                radius="full"
                variant="flat"
                color="danger"
                className="mt-4 w-full"
                onClick={() => handleDelete(pet._id)}
              >
                Delete Listing
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListingClient;
