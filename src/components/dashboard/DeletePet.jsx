import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { deletePet } from "@/lib/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const DeletePet = ({ pet, email }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const data = await deletePet(id, email);
    if (data.deletedCount === 1) {
      toast.success(`${pet.petName} has been Deleted Successfully`);
      router.refresh();
    }
  };
  return (
    <div>
      <AlertDialog>
        <Button className={"text-warning"} variant="secondary">Delete</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="default" />
                <AlertDialog.Heading>
                  Delete <span className="text-warning">{pet.petName}</span> Permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete
                  <strong> {pet.petName}</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  size="sm"
                  radius="full"
                  variant="secondary"
                  className={"text-warning"}
                  onClick={() => handleDelete(pet._id)}
                >
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeletePet;
