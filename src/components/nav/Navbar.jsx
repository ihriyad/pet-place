"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, Button } from "@heroui/react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { FaPaw } from "react-icons/fa";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { authClient } from "@/lib/auth-client";

import { Lobster } from "next/font/google";
import Image from "next/image";
import ProfileDropdown from "./ProfileDropdown";

const links = [
  { label: "Home", href: "/" },
  { label: "All Pets", href: "/all_pets" },
  { label: "My Requests", href: "/dashboard/my_request", isPrivate: true },
  { label: "Add Pet", href: "/dashboard/add_pet", isPrivate: true },
];
const logoFont = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const { data: session, isPending, error, refetch } = authClient.useSession();
  const user = session?.user;
  // console.log(user, "user from navbar");

  const isActive = (href) => pathname === href;

  const visibleLinks = links.filter((link) => !link.isPrivate || user);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-divider backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center relative">
        {/* mobile menu */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer text-2xl p-1 rounded-md hover:bg-default-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <RiCloseLine /> : <RiMenu2Line />}
          </button>
          <Link href={"/"}>
          <div className="flex items-center  p-2 rounded-2xl">
            <Image
              src={"/logo2.png"}
              height={30}
              width={30}
              alt="Logo"
              className="text-warning"
            ></Image>
            <p className={`${logoFont.className} uppercase text-lg font-bold`}>
              pet<span className="text-warning">place</span>
            </p>
          </div>
        </Link>
        </div>

        {/*logo for desktop */}
          <Link href={"/"}
          className="hidden md:flex">
          <div className="flex items-center  p-2 rounded-2xl">
            <Image
              src={"/logo2.png"}
              height={30}
              width={30}
              alt="Logo"
              className="text-warning"
            ></Image>
            <p className={`${logoFont.className} uppercase text-lg font-bold`}>
              pet<span className="text-warning">place</span>
            </p>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {visibleLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-warning font-semibold"
                    : "text-foreground-500 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />

          {!isPending && (
            <>
              {user ? (
                <ProfileDropdown user={user}></ProfileDropdown>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="font-semibold text-warning"
                    >
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b border-divider md:hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1 p-4">
              {visibleLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-warning/10 text-warning font-semibold"
                        : "text-foreground-500 hover:bg-default-100 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
