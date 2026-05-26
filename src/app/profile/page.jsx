import EditProfile from "@/components/profile/EditProfile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div>
      <EditProfile user={user}></EditProfile>
    </div>
  );
};

export default ProfilePage;
