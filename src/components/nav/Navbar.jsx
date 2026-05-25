"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { FaPaw } from "react-icons/fa";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const links = {
  public: [
    { label: "Home", href: "/" },
    { label: "All Pets", href: "/pets" },
  ],
  private: [
    { label: "My Requests", href: "/my-requests" },
    { label: "Add Pet", href: "/add-pet" },
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLoggedIn = true;

  const currentLinks = isLoggedIn
    ? [...links.public, ...links.private]
    : links.public;

  const isActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-divider backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center relative">
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer text-2xl p-1 rounded-md hover:bg-default-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <RiCloseLine /> : <RiMenu2Line />}
          </button>
        </div>

        <Link href="/" className="flex items-center gap-1 font-bold">
          <FaPaw className="text-2xl" />
          <h2>
            <span className="text-cyan-500">Pet</span>Place
          </h2>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {currentLinks.map((link) => (
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

          {isLoggedIn ? (
            <Link href="/dashboard">
              <Button
                color="warning"
                variant="flat"
                size="sm"
                className="font-semibold"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button variant="secondary" size="sm" className="font-semibold">
                Login
              </Button>
            </Link>
          )}
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b border-divider md:hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1 p-4">
              {currentLinks.map((link) => (
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
