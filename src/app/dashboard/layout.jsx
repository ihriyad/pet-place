"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTh, FaPaw, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Image from "next/image";
import { Lobster } from "next/font/google";
const logoFont = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});

const links = [
  { href: "/dashboard", label: "Dashboard", icon: <MdSpaceDashboard /> },
  { href: "/dashboard/my_request", label: "My Request", icon: <FaPaw /> },
  { href: "/dashboard/add_pet", label: "Add Pet", icon: <FaTh /> },
  { href: "/dashboard/my_listing", label: "My Listing", icon: <FaUser /> },
];

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section className="h-screen flex bg-default-50">
      {/* mobile*/}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-background border-r border-divider z-30 flex flex-col transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:z-auto`}
      >
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

        <nav className="flex flex-col gap-1 p-4 flex-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                ${
                  pathname === link.href
                    ? "bg-warning/10 text-warning"
                    : "text-foreground-500 hover:bg-default-100 hover:text-foreground"
                }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-10 bg-background border-b border-divider px-4 py-3 flex items-center gap-3 lg:px-6">
          <button
            className="lg:hidden text-warning hover:text-foreground"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
          <p className="text-md font-semibold text-foreground">Dashboard</p>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </section>
  );
};
export default DashboardLayout;
