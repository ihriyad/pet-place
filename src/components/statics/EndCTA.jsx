"use client";

import React from "react";
import Link from "next/link";
import { FaPaw } from "react-icons/fa";

const EndCTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center text-warning text-xl mx-auto mb-6">
          <FaPaw />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Someone out there is waiting for you
        </h2>

        <p className="text-foreground-500 text-base leading-relaxed mb-8 max-w-md mx-auto">
          Every pet on PetPlace needs a home, not a cage. If you have been thinking
          about it — this is probably the sign.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/all-pets"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-warning/20 text-warning font-semibold text-sm hover:bg-warning/30 transition-colors"
          >
            Find a pet
          </Link>
          <Link
            href="/add-pet"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-divider text-foreground-500 font-semibold text-sm hover:border-warning hover:text-warning transition-colors"
          >
            Rehome a pet
          </Link>
        </div>

        <p className="text-xs text-foreground-400 mt-8">
          Free to use · No account needed to browse · Real people, real pets
        </p>
      </div>
    </section>
  );
};

export default EndCTA;