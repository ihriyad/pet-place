"use client";

import React from "react";
import { FaHeart, FaHome, FaCheckCircle } from "react-icons/fa";

const advantages = [
  {
    icon: <FaHeart className="text-[#C24B27] text-2xl" />,
    title: "Save a Precious Life",
    description:
      "Every year, millions of healthy animals enter shelters. When you adopt, you directly rescue an animal and open up a critical spot for another pet in need.",
  },
  {
    icon: <FaHome className="text-warning text-2xl" />,
    title: "Fight Puppy Mills",
    description:
      "Buying from unregulated online sellers or pet stores frequently funds cruel commercial breeding facilities. Adoption breaks that consumer cycle entirely.",
  },
  {
    icon: <FaCheckCircle className="text-success text-2xl" />,
    title: "Already House-Trained",
    description:
      "Many rescue pets come from previous homes where they learned basic manners. They are often house-trained and ready to adapt to your schedule instantly.",
  },
];

const WhyAdopt = () => {
  return (
    <section className="py-16 bg-background max-w-7xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Why You Should Adopt
        </h2>
        <p className="text-foreground-500 text-base leading-relaxed">
          Choosing adoption means giving a second chance to an incredible
          animal. It is an affordable, deeply rewarding way to find a lifelong
          family member.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {advantages.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-default-50/50 border border-divider rounded-xl hover:border-foreground-400 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center border border-divider shadow-sm mb-6 group-hover:scale-105 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-foreground-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAdopt;
