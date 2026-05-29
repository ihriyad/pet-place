"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropdownCircle } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
const ProfileDropdown = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSignOut = async () => {
    try {
      setIsLoading(true);

      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
          },
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dropdown>
      <Button
        aria-label="Menu"
        variant="ghost"
        className={"flex items-center justify-center border-none"}
      >
        <Avatar size="sm">
          <Avatar.Image alt="user image" src={user?.image} />
          <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
        </Avatar>
        <IoIosArrowDropdownCircle />
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu
          onAction={(key) => {
            if (key === "profile") router.push("/profile");
            if (key === "dashboard") router.push("/dashboard");
            if (key === "logout") handleSignOut();
          }}
        >
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
          <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Label>Dashboard</Label>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Log Out" variant="danger">
            <Label className="flex items-center gap-2">
              {isLoading ? (
                "Logging out..."
              ) : (
                <>
                  Log Out <TbLogout />
                </>
              )}
            </Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};
export default ProfileDropdown;
