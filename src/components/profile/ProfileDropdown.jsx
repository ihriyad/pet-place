"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowDropdown } from "react-icons/io";

export function ProfileDropdown({ user }) {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
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
        <IoIosArrowDropdown />
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
            <Label>Log Out</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
