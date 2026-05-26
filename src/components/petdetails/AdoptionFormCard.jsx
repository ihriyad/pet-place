"use client";

import React from "react";
import { Input, Button, TextArea, Label } from "@heroui/react";
import { FaHeart, FaCalendarAlt } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const AdoptionFormCard = ({ petName, petId }) => {
  const { data: session } = authClient.useSession();

  const currentUserName = session?.user?.name || "Loading Handler...";
  const currentUserEmail = session?.user?.email || "loading@petplace.com";

  const handleAdoptSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const requestPayload = {
      petId,
      petName,
      userName: currentUserName,
      userEmail: currentUserEmail,
      pickupDate: formData.get("pickupDate"),
      message: formData.get("message"),
      //   status: "pending",
    };

    console.log("Adoption Payload Dispatched:", requestPayload);
  };

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

      <form onSubmit={handleAdoptSubmit} className="flex flex-col gap-5">
        <Label>Target Pet</Label>
        <Input
          readOnly
          type="text"
          defaultValue={petName}
          variant="flat"
          radius="sm"
          className="cursor-not-allowed font-bold"
        />

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

        <TextArea
          required
          name="message"
          label="Message to Shelter / Owner"
          placeholder="Share your home environment conditions, pet care backgrounds, or any questions you have..."
          variant="bordered"
          radius="sm"
        />

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full mt-2 font-bold text-warning transition-transform active:scale-[0.99] shadow-lg shadow-warning/5"
        >
          Adopt {petName}
        </Button>
      </form>
    </div>
  );
};

export default AdoptionFormCard;
