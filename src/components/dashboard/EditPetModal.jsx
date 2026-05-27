"use client";

import { handleEditPet } from "@/lib/actions";
import { Button, Input, Modal, TextArea } from "@heroui/react";
import React from "react";
import { FaPaw } from "react-icons/fa";

const EditPetModal = ({ pet, id }) => {
  // console.log(id);

  const editFormAction = async (formData) => {
    const editedPet = Object.fromEntries(formData.entries());
    //   console.log(editedPet);
    await handleEditPet(editedPet, id);
  };
  return (
    <Modal>
      <Button
        size="sm"
        radius="full"
        variant="flat"
        className="w-full text-foreground-500"
      >
        Edit
      </Button>
      <Modal.Backdrop variant="blur">
        <Modal.Container size="cover">
          <Modal.Dialog>
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="flex items-center gap-2">
                <FaPaw color="orange" /> Edit Pet Details
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <form action={editFormAction} className="flex flex-col gap-5 p-4">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className=" flex flex-col gap-1">
                    <label className="text-sm font-medium text-foreground">
                      Pet Name <span className="text-danger">*</span>
                    </label>
                    <Input
                      required
                      type="text"
                      name="petName"
                      defaultValue={pet?.petName}
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
                      defaultValue={pet?.species}
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
                      defaultValue={pet?.breed}
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
                      defaultValue={pet?.age}
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
                      defaultValue={pet?.gender}
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
                      defaultValue={pet?.imageUrl}
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
                      defaultValue={pet?.adoptionFee}
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
                      defaultValue={pet?.location}
                      variant="bordered"
                      radius="sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-foreground">
                      Health Status
                    </label>
                    <Input
                      type="text"
                      name="healthStatus"
                      defaultValue={pet?.healthStatus}
                      variant="bordered"
                      radius="sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-foreground">
                      Vaccination Status
                    </label>
                    <Input
                      type="text"
                      name="vaccinationStatus"
                      defaultValue={pet?.vaccinationStatus}
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
                    defaultValue={pet?.description}
                    placeholder="Tell potential adopters about your pet..."
                    variant="bordered"
                    radius="sm"
                  />
                </div>

                <Modal.Footer>
                  <Button slot="close" variant="secondary">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-warning/20 text-warning font-semibold"
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditPetModal;
