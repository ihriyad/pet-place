// app/not-found.jsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden relative">
      {/* background paw prints */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-5 text-warning">
        {[
          "top-10 left-10",
          "top-24 right-20",
          "bottom-20 left-1/4",
          "bottom-10 right-10",
          "top-1/2 left-5",
          "top-1/3 right-1/3",
          "bottom-1/3 left-1/2",
          "top-10 left-1/2",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute text-6xl ${pos} rotate-${i % 2 === 0 ? "12" : "-12"}`}
          >
            🐾
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center text-center z-10 max-w-lg">
        {/* big 404 */}
        <div className="relative mb-4">
          <h1 className="text-[10rem] font-black leading-none text-warning/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center text-7xl animate-bounce">
            🐶
          </div>
        </div>

        {/* text */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Oops! This page ran away
        </h2>
        <p className="text-foreground-500 text-sm md:text-base mb-8 leading-relaxed">
          Looks like this page is out on a walk and has not come back yet. Lets
          get you back home before the treats run out!
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-warning text-white font-semibold text-sm hover:bg-warning/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-warning/30"
          >
            Go Home
          </Link>
          <Link
            href="/all_pets"
            className="px-6 py-3 rounded-xl border border-divider text-foreground font-semibold text-sm hover:bg-default-100 transition-all hover:-translate-y-0.5"
          >
            Browse Pets
          </Link>
        </div>
      </div>
    </div>
  );
}
