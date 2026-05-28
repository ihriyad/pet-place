"use client";
import MyRequest from "@/components/dashboard/MyRequest";
import { getMyRequests } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";

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

  return <MyRequest requests={requests}></MyRequest>;
};

export default MyRequestPage;
