"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQS = [
  {
    question: "Is it free to adopt a pet through PetPlace?",
    answer:
      "Yes, browsing and contacting guardians is completely free. Some guardians may ask for a small rehoming fee to cover vet costs, but that's between you and them directly.",
  },
  {
    question: "How do I know if a pet listing is genuine?",
    answer:
      "Every guardian on PetPlace goes through a basic verification step before they can post. We also encourage photos, vet records, and direct messaging so you can ask questions before committing.",
  },
  {
    question: "Can I visit the pet before deciding?",
    answer:
      "Absolutely — and we recommend it. You can request a visit directly through the listing page. Most guardians are happy to arrange a meet before any decision is made.",
  },
  {
    question: "What if the adoption doesn't work out?",
    answer:
      "It happens sometimes. Reach out to the guardian first — most are understanding. If you need further help, you can contact our support team and we'll do our best to find the pet a new home.",
  },
  {
    question: "Can I list a pet if I need to rehome them?",
    answer:
      "Yes. Head to the 'List a Pet' page, fill in the details, and your listing goes live after a quick review. We just ask that you're honest about the pet's history and temperament.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="py-16 max-w-3xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">
          Common questions
        </h2>
        <p className="text-foreground-500 text-base">
          If something is not covered here, feel free to reach out.
        </p>
      </div>

      <div className="divide-y divide-divider border border-divider rounded-xl overflow-hidden">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-background">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-default-50/50 transition-colors"
            >
              <span className="text-sm font-semibold text-foreground">
                {faq.question}
              </span>
              <FaChevronDown
                className={`shrink-0 text-foreground-400 text-xs transition-transform duration-300 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === i && (
              <div className="px-6 pb-5">
                <p className="text-sm text-foreground-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
