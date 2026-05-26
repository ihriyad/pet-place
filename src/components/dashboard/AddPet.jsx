"use client";

import React from "react";
import { Input, Button, TextArea } from "@heroui/react";
import { FaPaw, FaCloudUploadAlt } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const AddPet = () => {
  const { data: session } = authClient.useSession();
  const ownerEmail = session?.user?.email || "loading@petplace.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const petData = Object.fromEntries(formData.entries());
    console.log("Form Data Submitted:", petData);
  };

  return (
    <div className="bg-default-50/30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-background border border-divider rounded-2xl p-6 md:p-10 shadow-sm">
        <div className="flex items-center gap-3 border-b border-divider pb-6 mb-8">
          <div className="w-10 h-10 rounded-xl bg-warning/10 text-warning flex items-center justify-center text-xl">
            <FaPaw />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              List a Pet for Adoption
            </h1>
            <p className="text-sm text-foreground-500">
              Provide accurate details to find them the perfect loving family.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Pet Name <span className="text-danger">*</span>
              </label>
              <Input
                required
                type="text"
                name="petName"
                placeholder="e.g., Rocky"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Species <span className="text-danger">*</span>
              </label>
              <Input
                required
                type="text"
                name="species"
                placeholder="e.g., Dog, Cat, Bird"
                variant="bordered"
                radius="sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Breed <span className="text-danger">*</span>
              </label>
              <Input
                required
                type="text"
                name="breed"
                placeholder="e.g., Golden Retriever"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Age <span className="text-danger">*</span>
              </label>
              <Input
                required
                type="text"
                name="age"
                placeholder="e.g., 2 Years"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Gender <span className="text-danger">*</span>
              </label>
              <Input
                required
                type="text"
                name="gender"
                placeholder="e.g., Male, Female"
                variant="bordered"
                radius="sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Image URL <span className="text-danger">*</span>
              </label>
              <Input
                required
                type="url"
                name="imageUrl"
                placeholder="https://imgbb.com/your-image-link"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Adoption Fee <span className="text-danger">*</span>
              </label>
              <Input
                required
                type="number"
                name="adoptionFee"
                placeholder="0.00"
                variant="bordered"
                radius="sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Location <span className="text-danger">*</span>
              </label>
              <Input
                required
                type="text"
                name="location"
                placeholder="e.g., Dhaka, BD"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Health Status
              </label>
              <Input
                required
                type="text"
                name="healthStatus"
                placeholder="e.g., Healthy"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                Vaccination Status
              </label>
              <Input
                required
                type="text"
                name="vaccinationStatus"
                placeholder="e.g., Fully Vaccinated"
                variant="bordered"
                radius="sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-foreground">
              Description <span className="text-danger">*</span>
            </label>
            <TextArea
              name="description"
              placeholder="Tell potential adopters about your pet's habits and unique personality..."
              variant="bordered"
              radius="sm"
            />
          </div>

          <div className="pt-4 border-t border-divider">
            <div className="flex flex-col gap-1 max-w-md">
              <label className="text-sm font-medium text-foreground">
                Owner Contact Email
              </label>
              <Input
                type="email"
                name="ownerEmail"
                readOnly
                defaultValue={ownerEmail}
                variant="flat"
                radius="sm"
                className="cursor-not-allowed"
              />
              <p className="text-xs text-foreground-400 px-1">
                This field is securely synced to your active account session.
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full sm:w-48 font-semibold text-warning transition-transform active:scale-[0.98]"
            >
              Add Pet
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPet;
