import Image from "next/image";
import React from "react";
import {
  FaHeartbeat,
  FaMapMarkerAlt,
  FaPaw,
  FaShieldAlt,
} from "react-icons/fa";

const PetDetails = ({ pet }) => {
  return (
    <div className="lg:col-span-7 flex flex-col gap-6">
      <div className="bg-background border border-divider rounded-3xl overflow-hidden shadow-sm">
        <div className="w-full aspect-[16/10] bg-default-100">
          <Image
            height={200}
            width={200}
            src={pet.imageUrl}
            alt={pet.petName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              {pet.petName}
            </h1>
            <span className="px-4 py-1.5 rounded-full bg-warning/10 text-warning font-bold text-sm uppercase tracking-wider">
              {Number(pet.adoptionFee) === 0
                ? "Free Adoption"
                : `$${pet.adoptionFee}`}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-default-100 text-foreground-700 px-3 py-1 rounded-md text-xs font-semibold">
              {pet.species}
            </span>
            <span className="bg-default-100 text-foreground-700 px-3 py-1 rounded-md text-xs font-semibold">
              {pet.breed}
            </span>
            <span className="bg-default-100 text-foreground-700 px-3 py-1 rounded-md text-xs font-semibold">
              {pet.age}
            </span>
            <span className="bg-default-100 text-foreground-700 px-3 py-1 rounded-md text-xs font-semibold">
              {pet.gender}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-foreground-500 mb-8 border-b border-divider pb-4">
            <FaMapMarkerAlt className="text-warning" />
            <span>{pet.location}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-default-50/50 border border-divider rounded-xl">
              <FaHeartbeat className="text-[#C24B27] text-xl shrink-0" />
              <div>
                <p className="text-xs text-foreground-400 font-medium">
                  Health Condition
                </p>
                <p className="text-sm font-bold text-foreground">
                  {pet.healthStatus}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-default-50/50 border border-divider rounded-xl">
              <FaShieldAlt className="text-success text-xl shrink-0" />
              <div>
                <p className="text-xs text-foreground-400 font-medium">
                  Vaccinations
                </p>
                <p className="text-sm font-bold text-foreground">
                  {pet.vaccinationStatus}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <FaPaw className="text-warning text-sm" /> About {pet.petName}
            </h3>
            <p className="text-foreground-600 text-base leading-relaxed whitespace-pre-line font-medium">
              {pet.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
