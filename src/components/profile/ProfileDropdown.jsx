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
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>
              <Link href={"/profile"}>Profile</Link>
            </Label>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>
              <Link href={"/dashboard"}>Dashboard</Link>
            </Label>
          </Dropdown.Item>

          <Dropdown.Item
            id="delete-file"
            textValue="Delete file"
            variant="danger"
            onClick={handleSignOut}
          >
            <Label>Log Out</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
