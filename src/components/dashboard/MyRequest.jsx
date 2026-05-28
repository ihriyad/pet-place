import CancelReqAlert from "@/app/dashboard/my_request/component/CancelReqAlert";
import { cancelRequest } from "@/lib/actions";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MyRequest = ({ requests }) => {


  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-foreground">My Requests</h1>

      <div className="flex flex-col gap-3">
        {requests.map((req) => (
          <div
            key={req._id}
            className="flex items-center gap-4 bg-background border border-divider rounded-xl p-4"
          >
            <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden">
              <Image
                src={req.petImage}
                alt={req.petName}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="font-semibold text-foreground">{req.petName}</p>
              <p className="text-xs text-foreground-400">{req.petSpecies}</p>
              <p className="text-xs text-foreground-400 mt-1 line-clamp-1">
                {req.message}
              </p>
            </div>
            {req.status === "pending" ? (
              <CancelReqAlert req={req}></CancelReqAlert>
            ) : (
              <></>
            )}
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0
              ${req.status === "pending" ? "bg-warning/10 text-warning" : ""}
              ${req.status === "approved" ? "bg-success/10 text-success" : ""}
              ${req.status === "rejected" ? "bg-danger/10 text-danger" : ""}
            `}
            >
              {req.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRequest;
