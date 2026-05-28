"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import {
  FaPaw,
  FaMapMarkerAlt,
  FaGenderless,
  FaMars,
  FaVenus,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Image from "next/image";

const PetCard = ({ pet }) => {
  const {
    _id,
    petName,
    species,
    breed,
    age,
    gender,
    imageUrl,
    location,
    adoptionFee,
  } = pet;

  const renderGenderIcon = () => {
    if (gender?.toLowerCase() === "male")
      return <FaMars className="text-blue-400" />;
    if (gender?.toLowerCase() === "female")
      return <FaVenus className="text-pink-400" />;
    return <FaGenderless className="text-default-400" />;
  };

  return (
    <div className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-divider shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-default-100">
      <Image
        height={200}
        width={200}
        src={imageUrl}
        alt={`${petName} - ${breed}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />

      <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
        {Number(adoptionFee) === 0 ? "Free Adoption" : `$${adoptionFee}`}
      </div>

      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-20 pb-5 px-5 flex flex-col justify-end text-white z-10">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-xl font-bold tracking-tight truncate drop-shadow-sm">
            {petName}
          </h3>
          <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
            {renderGenderIcon()}
          </div>
        </div>

        <p className="text-xs font-medium text-default-300 mb-3 truncate">
          {breed} • <span className="text-warning font-semibold">{age}</span>
        </p>

        <div className="flex items-center gap-1.5 text-xs text-default-400 mb-4">
          <FaMapMarkerAlt className="text-warning/80 shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        <Link
          href={`/all_pets/${_id}`}
          className="flex items-center gap-1 hover:underline"
        >
          Meet<span className="text-warning">{petName}</span>
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
