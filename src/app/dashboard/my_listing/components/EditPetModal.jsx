"use client";

import { handleEditPet } from "@/lib/actions";
import {
  Button,
  Input,
  Modal,
  TextArea,
  Select,
  Label,
  ListBox,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaPaw } from "react-icons/fa";

const EditPetModal = ({ pet, id }) => {
  const router = useRouter();

  const editFormAction = async (formData) => {
    const editedPet = Object.fromEntries(formData.entries());

    const data = await handleEditPet(editedPet, id);

    if (data.modifiedCount === 1) {
      toast.success("Information Updated");
      router.refresh();
    }
  };

  return (
    <Modal>
      {/* Open Button */}
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

            {/* Header */}
            <Modal.Header>
              <Modal.Heading className="flex items-center gap-2">
                <FaPaw color="orange" />
                Edit Pet Details
              </Modal.Heading>
            </Modal.Header>

            {/* Body */}
            <Modal.Body>
              <form
                action={editFormAction}
                className="flex flex-col gap-5 p-4"
              >
                {/* Pet Name + Species */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Pet Name */}
                  <div className="flex flex-col gap-1">
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

                  {/* Species */}
                  <Select
                    name="species"
                    placeholder={pet?.species || "Select species"}
                    className="w-full"
                    defaultSelectedKeys={[pet?.species?.toLowerCase()]}
                  >
                    <Label>
                      Species <span className="text-danger">*</span>
                    </Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="dog" textValue="Dog">
                          Dog
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="cat" textValue="Cat">
                          Cat
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="bird" textValue="Bird">
                          Bird
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="rabbit" textValue="Rabbit">
                          Rabbit
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="fish" textValue="Fish">
                          Fish
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                {/* Breed + Age + Gender */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Breed */}
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

                  {/* Age */}
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

                  {/* Gender */}
                  <Select
                    name="gender"
                    placeholder={pet?.gender || "Select gender"}
                    className="w-full"
                    defaultSelectedKeys={[pet?.gender?.toLowerCase()]}
                  >
                    <Label>
                      Gender <span className="text-danger">*</span>
                    </Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="male" textValue="Male">
                          Male
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="female" textValue="Female">
                          Female
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                {/* Image URL + Fee */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Image URL */}
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

                  {/* Adoption Fee */}
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

                {/* Location + Health + Vaccination */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Location */}
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

                  {/* Health Status */}
                  <Select
                    name="healthStatus"
                    placeholder={
                      pet?.healthStatus || "Select health status"
                    }
                    className="w-full"
                    defaultSelectedKeys={[
                      pet?.healthStatus
                        ?.toLowerCase()
                        ?.replaceAll(" ", "-"),
                    ]}
                  >
                    <Label>Health Status</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="healthy" textValue="Healthy">
                          Healthy
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="injured" textValue="Injured">
                          Injured
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="under-treatment"
                          textValue="Under Treatment"
                        >
                          Under Treatment
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="special-needs"
                          textValue="Special Needs"
                        >
                          Special Needs
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Vaccination Status */}
                  <Select
                    name="vaccinationStatus"
                    placeholder={
                      pet?.vaccinationStatus || "Vaccination status"
                    }
                    className="w-full"
                    defaultSelectedKeys={[
                      pet?.vaccinationStatus
                        ?.toLowerCase()
                        ?.replaceAll(" ", "-"),
                    ]}
                  >
                    <Label>Vaccination Status</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item
                          id="fully-vaccinated"
                          textValue="Fully Vaccinated"
                        >
                          Fully Vaccinated
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="partially-vaccinated"
                          textValue="Partially Vaccinated"
                        >
                          Partially Vaccinated
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="not-vaccinated"
                          textValue="Not Vaccinated"
                        >
                          Not Vaccinated
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                {/* Description */}
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
                    minRows={5}
                  />
                </div>

                {/* Footer */}
                <Modal.Footer>
                  <Button slot="close" variant="secondary">
                    Cancel
                  </Button>

                  <Button
                    slot="close"
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