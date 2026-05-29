"use client";

import { useEffect, useState } from "react";
import { Button, Modal } from "@heroui/react";
import { getPetRequests, updateRequestStatus } from "@/lib/actions";

const RequestsModal = ({ petId }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPetRequests(petId).then((data) => {
      setRequests(data);
      setLoading(false);
    });
  }, [petId]);

  const handleStatus = async (requestId, status) => {
    const data = await updateRequestStatus(requestId, status);
    if (data.modifiedCount === 1) {
      setRequests((prev) =>
        prev.map((r) => (r._id === requestId ? { ...r, status } : r)),
      );
    }
  };

  return (
    <Modal>
      <Button
        size="sm"
        radius="full"
        variant="flat"
        className="text-foreground-500"
      >
        Requests {requests.length > 0 && `(${requests.length})`}
      </Button>
      <Modal.Backdrop variant="blur">
        <Modal.Container size="lg">
          <Modal.Dialog>
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Adoption Requests</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              {loading && (
                <p className="text-sm text-foreground-400">Loading...</p>
              )}

              {!loading && requests.length === 0 && (
                <p className="text-sm text-foreground-400 text-center py-6">
                  No requests yet for this pet.
                </p>
              )}

              <div className="bg-background rounded-2xl flex flex-col gap-3">
                {requests.map((req) => (
                  <div
                    key={req._id}
                    className="  p-4 flex flex-col gap-3"
                  >
                    {/* adopter info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                         Requested by {req.adopterName}
                        </p>
                        <p className="text-xs text-foreground-400">
                          {req.adopterEmail}
                        </p>
                        <p className="text-xs text-foreground-400">
                          Date: {req.date}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full
                        ${req.status === "pending" ? "bg-warning/10 text-warning" : ""}
                        ${req.status === "approved" ? "bg-success/10 text-success" : ""}
                        ${req.status === "rejected" ? "bg-danger/10 text-danger" : ""}
                      `}
                      >
                        {req.status}
                      </span>
                    </div>

                    {/* message */}
                    <p className="font-bold">

                      Message:
                    </p>
                    <p className="text-xs text-warning bg-default-50 rounded-lg p-3">
                      {req.message}
                    </p>

                    {req.status === "pending" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          radius="full"
                          className={"text-success  "}
                          onClick={() => handleStatus(req._id, "approved")}
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          radius="full"
                          variant="ghost"
                          className={"text-danger "}
                          onClick={() => handleStatus(req._id, "rejected")}
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default RequestsModal;
