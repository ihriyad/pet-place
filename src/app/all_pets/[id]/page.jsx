import React from "react";
import { getPetById } from "@/lib/actions";
import AdoptionFormCard from "@/components/petdetails/AdoptionFormCard";
import PetDetails from "@/components/petdetails/PetDetails";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  const pet = await getPetById(id);

  if (!pet) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-foreground-500 font-medium">
          Pet listing not found.
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-default-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* pet left*/}
          <PetDetails pet={pet}></PetDetails>

          {/* form right */}
          <div className="lg:col-span-5 lg:sticky lg:top-6">
            <AdoptionFormCard petName={pet.petName} petId={pet._id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PetDetailsPage;
