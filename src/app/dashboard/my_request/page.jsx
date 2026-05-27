"use client";
import { getMyRequests } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

import { useEffect, useState } from "react";

const MyRequestPage = () => {
  const { data: session } = authClient.useSession();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;
    getMyRequests(session.user.email).then((data) => {
      setRequests(data);
      setLoading(false);
    });
  }, [session]);

  if (loading) return <p className="text-sm text-foreground-400">Loading...</p>;

  if (requests.length === 0)
    return (
      <div className="text-center py-20">
        <p className="font-semibold text-foreground mb-1">No requests yet</p>
        <p className="text-sm text-foreground-400">
          Adoption requests you send will show up here.
        </p>
      </div>
    );

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

export default MyRequestPage;
