"use client";

import React, { useState } from "react";
import { Input, Button, TextArea, Label, Separator } from "@heroui/react";
import { FaHeart } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { getMyRequests, sendAdoptionRequest } from "@/lib/actions";

import { useRouter } from "next/navigation";

const AdoptionFormCard = ({ pet, adopterEmail }) => {
  // console.log(pet);
  const { petName, gender, age } = pet;
  const { data: session } = authClient.useSession();

  const currentUserName = session?.user?.name || null;
  const currentUserEmail = session?.user?.email || null;

  const [requested, setRequested] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const requestData = {
      adopterName: currentUserName,
      adopterEmail: currentUserEmail,

      message: formData.get("message"),
      date: formData.get("pickupDate"),
      petId: pet._id,
      petName: pet.petName,
      petImage: pet.imageUrl,
      petSpecies: pet.species,

      ownerEmail: pet.ownerEmail,

      status: "pending",
    };
    // console.log(requestData)

    const data = await sendAdoptionRequest(requestData);
    console.log(data);
    if (data.insertedId) {
      toast.success("Request Send to Owner Successfully");
      setRequested(true);
      router.refresh();
    }
  };
  // const handleStatus =async()=>{

  //   // console.log(data);
  //   const status = data.map(d=>d)
  //   console.log(status)
  // }

  return (
    <div className="bg-background border border-divider rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <FaHeart className="text-[#C24B27]" /> Adoption Request
        </h2>
        <p className="text-xs text-foreground-500 mt-1">
          Submit your context parameter profiles below. The local coordinator
          loop will process this pending block.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Label>Pet Information:</Label>

        <div className="flex flex-col gap-3 bg-white/10 p-3 rounded-2xl">
          <Label>Target Pet</Label>
          <Input
            readOnly
            type="text"
            defaultValue={petName}
            variant="flat"
            radius="sm"
            className="cursor-not-allowed font-bold"
          />
          <Label>Gender</Label>
          <Input
            readOnly
            type="text"
            defaultValue={gender}
            variant="flat"
            radius="sm"
            className="cursor-not-allowed font-bold"
          />
          <Label>Age</Label>
          <Input
            readOnly
            type="text"
            defaultValue={age}
            variant="flat"
            radius="sm"
            className="cursor-not-allowed font-bold"
          />
        </div>
        <Separator></Separator>
        <Label>Your Information:</Label>

        <div className="flex flex-col gap-3 bg-white/10 p-3 rounded-2xl">
          <Label>Your Full Name</Label>
          <Input
            readOnly
            type="text"
            defaultValue={currentUserName}
            variant="flat"
            radius="sm"
            className="cursor-not-allowed"
          />
          <Label>Your Email Address</Label>
          <Input
            readOnly
            type="email"
            defaultValue={currentUserEmail}
            variant="flat"
            radius="sm"
            className="cursor-not-allowed"
          />

          <Label>Date</Label>
          <Input
            required
            type="date"
            name="pickupDate"
            label="Proposed Pickup Date"
            variant="bordered"
            radius="sm"
          />
          <Label>Why do you want to adopt?</Label>
          <TextArea
            required
            name="message"
            label="Message to Shelter / Owner"
            placeholder="Share your home environment conditions, pet care backgrounds, or any questions you have..."
            variant="bordered"
            radius="sm"
          />
        </div>
        {adopterEmail === currentUserEmail ? (
          <Button
            variant="secondary"
            size="lg"
            className="w-full mt-2 font-bold text-warning transition-transform active:scale-[0.99] shadow-lg shadow-warning/5"
          >
            Pending
          </Button>
        ) : (
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full mt-2 font-bold text-warning transition-transform active:scale-[0.99] shadow-lg shadow-warning/5"
          >
            Adopt ${petName}
          </Button>
        )}
      </form>
    </div>
  );
};

export default AdoptionFormCard;
