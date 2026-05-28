import { cancelRequest } from "@/lib/actions";
import { AlertDialog, Button } from "@heroui/react";

import React from "react";
import toast from "react-hot-toast";

const CancelReqAlert = (req) => {
  const email = req.req.adopterEmail;
  // console.log(email)

  const handleCancel = async (id) => {
    const data = await cancelRequest(id, email);
    if (data.deletedCount === 1) {
      toast.success(`Request has been Deleted Successfully`);
      window.location.reload();
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button className={"text-warning"} variant="secondary">
          Cancel
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="default" />
                <AlertDialog.Heading>
                  Delete <span className="text-warning"></span> Permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete
                  <strong></strong> and all of its data. This action cannot be
                  undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  slot={"close"}
                  onClick={() => handleCancel(req.req._id)}
                  className={"text-warning"}
                  variant="secondary"
                >
                  Cancel
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default CancelReqAlert;
