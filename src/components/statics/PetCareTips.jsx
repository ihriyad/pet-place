"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const tips = [
  {
    category: "Nutrition",
    title: "How to Switch Your Pet's Food Without Upsetting Their Stomach",
    readTime: "4 min read",
    excerpt:
      "Jumping straight to new food is a common mistake. A slow 7-day mix of old and new kibble makes the transition much easier on a shelter animal.",
    date: "May 24, 2026",
  },
  {
    category: "Behavior",
    title: "The 3-3-3 Rule Every New Pet Owner Should Know",
    readTime: "6 min read",
    excerpt:
      "The first 3 days, 3 weeks, and 3 months all feel different for a rescue. Knowing what to expect helps you give them the space they actually need.",
    date: "May 18, 2026",
  },
  {
    category: "Health",
    title: "What to Sort Out With Your Vet in the First Month",
    readTime: "5 min read",
    excerpt:
      "Even fully vaccinated shelter pets benefit from a first visit to your local vet — it sets a baseline and catches anything that might have been missed.",
    date: "May 12, 2026",
  },
];

const PetCareTips = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
          A few things worth reading
        </h2>
        <p className="text-foreground-500 text-base">
          Practical guides for the first weeks after bringing a pet home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tips.map((tip, i) => (
          <article
            key={i}
            className="flex flex-col justify-between p-5 bg-background border border-divider rounded-xl hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-default-100 text-foreground-600 text-xs font-semibold">
                  {tip.category}
                </span>
                <span className="text-xs text-foreground-400">
                  {tip.readTime}
                </span>
              </div>

              <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 hover:text-warning transition-colors">
                <Link href={`#`}>{tip.title}</Link>
              </h3>

              <p className="text-sm text-foreground-500 leading-relaxed line-clamp-3">
                {tip.excerpt}
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-divider flex items-center justify-between text-xs text-foreground-400">
              <span>{tip.date}</span>
              <Link
                href={`#`}
                className="text-warning font-semibold hover:underline "
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>

      <p className="text-sm text-warning font-semibold underline text-center my-6">
        <Link href="#">All articles</Link>
      </p>
    </section>
  );
};

export default PetCareTips;
