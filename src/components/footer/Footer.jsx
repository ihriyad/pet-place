"use client";

import React from "react";
import Link from "next/link";
import {
  FaPaw,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  { icon: <FaFacebook />, href: "https://facebook.com", label: "Facebook" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "All Pets", href: "/pets" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const contactInfo = [
  {
    icon: <HiMail className="text-warning text-lg" />,
    text: "support@petplace.com",
    href: "mailto:support@petplace.com",
  },
  {
    icon: <HiPhone className="text-warning text-lg" />,
    text: "+880 1936730675",
    href: "/",
  },
  {
    icon: <HiLocationMarker className="text-warning text-lg" />,
    text: "Pabna, Bangladesh",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-divider mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold tracking-wider text-xl uppercase w-fit"
            >
              <FaPaw className="text-warning text-2xl" />
              <h2>
                Pet
                <span className="text-warning uppercase">Place</span>
              </h2>
            </Link>
            <p className="text-sm text-foreground-500 max-w-sm leading-relaxed">
              Connecting lovable pets with their forever families. Our secure
              full-stack adoption platform streamlines the request tracking and
              matching pipeline for modern shelters.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-400">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-500 hover:text-warning transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-400">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-foreground-500"
                >
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-warning transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-divider flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground-400 text-center sm:text-left">
            &copy; {currentYear} PetPlace. All rights reserved. Built with the{" "}
            <span className="text-warning font-bold ">MERN</span> stack.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-lg text-foreground-400 hover:text-warning hover:scale-110 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
