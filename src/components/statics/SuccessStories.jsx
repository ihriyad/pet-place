"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const stories = [
  {
    name: "Milo & The Rahman Family",
    image: "/milo.png",
    petType: "Adopted Pug",
    quote:
      "Milo changed everything honestly. Within a week of finding him on PetPlace we had him home, and now mornings just feel different with him around.",
  },
  {
    name: "Luna & Sarah",
    image: "/luna.png",
    petType: "Adopted Calico Cat",
    quote:
      "I didn't expect it to be this easy. Luna was already vaccinated and micro chipped — she picked her favorite window spot on day one.",
  },
  {
  name: "Biscuit & The Karim Family",
  image: "/biscuit.png",
  petType: "Adopted Tabby Cat",
  quote:
    "We were a little unsure at first — none of us had owned a cat before. But Biscuit settled in so fast, now he sleeps on my son's pillow every night.",
},
{
  name: "Pepper & James",
  image: "/pepper.png",
  petType: "Adopted Holland Lop Rabbit",
  quote:
    "Honestly didn't think a rabbit could have this much personality. Pepper binkies around the living room every evening and has completely won over the whole family.",
},
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-default-50/30 border-y border-divider">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            They found their people
          </h2>
          <p className="text-foreground-500 text-base">
            A few stories from families who adopted through PetPlace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {stories.map((story, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-5 bg-background p-6 rounded-xl border border-divider shadow-sm"
            >
              <div className="relative w-full sm:w-36 h-36 shrink-0 rounded-lg overflow-hidden border border-divider bg-default-100">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <FaQuoteLeft className="text-warning/20 text-xl mb-2" />
                  <p className="text-sm italic text-foreground-600 leading-relaxed mb-4">
                    {story.quote}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{story.name}</p>
                  <p className="text-xs font-semibold text-warning uppercase tracking-wider mt-0.5">
                    {story.petType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;