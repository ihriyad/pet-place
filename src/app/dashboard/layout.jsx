"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTh, FaPaw, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";

const links = [
  { href: "/dashboard", label: "Basic", icon: <BiInfoCircle /> },
  { href: "/dashboard/my_request", label: "My Request", icon: <FaPaw /> },
  { href: "/dashboard/add_pet", label: "Add Pet", icon: <FaTh /> },
  { href: "/dashboard/my_listing", label: "My Listing", icon: <FaUser /> },
];

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-default-50">
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
        <div className="px-6 py-5 border-b border-divider">
          <Link
            href={"/"}
            className="text-lg font-bold text-foreground uppercase"
          >
            <FaPaw></FaPaw> Pet<span className="text-warning">Place</span>
          </Link>
        </div>

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
            className="lg:hidden text-foreground-500 hover:text-foreground"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
          <p className="text-sm font-semibold text-foreground">Dashboard</p>
        </header>
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};
export default DashboardLayout;
