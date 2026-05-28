"use client";
import { deletePet } from "@/lib/actions";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { FaPaw } from "react-icons/fa";
import EditPetModal from "./EditPetModal";
import DeletePet from "./DeletePet";
import RequestsModal from "./RequestsModal";

const MyListingClient = ({ pets, email }) => {
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

  const available = pets.filter((p) => !p.adopted).length;
  const adopted = pets.filter((p) => p.adopted).length;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold text-foreground mb-4">My Listings</h1>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Total", value: pets.length },
            { label: "Available", value: available },
            { label: "Adopted", value: adopted },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-background border border-divider rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-foreground-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-background border border-divider rounded-xl overflow-hidden shadow-sm flex flex-col"
          >
            <div className="relative w-full h-44">
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 flex flex-col gap-3 flex-1">
              <div>
                <p className="font-bold text-foreground">{pet.petName}</p>
                <p className="text-xs text-foreground-400 mt-0.5">
                  {pet.species} · {pet.breed}
                </p>
                <p className="text-sm font-semibold text-warning mt-1">
                  {pet.adoptionFee === 0 || pet.adoptionFee === "0"
                    ? "Free"
                    : `$${pet.adoptionFee}`}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-auto">
                <RequestsModal petId={pet._id} />

                <EditPetModal id={pet._id} pet={pet}></EditPetModal>

                <Link href={`/all_pets/${pet._id}`} className="w-full">
                  <Button
                    size="sm"
                    radius="full"
                    variant="bordered"
                    className="w-full"
                  >
                    View
                  </Button>
                </Link>

                <DeletePet pet={pet} email={email}></DeletePet>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListingClient;
