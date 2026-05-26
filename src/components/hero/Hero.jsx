"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 90 },
  }),
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20 lg:py-24">
      <div className="absolute top-[-10%] right-[-10%] w-75 h-75 md:w-125 md:h-125 rounded-full bg-warning/10 blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-62 h-62 md:w-100 md:h-100 rounded-full bg-default-200/20 blur-[60px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 text-warning text-xs font-semibold uppercase tracking-wider w-fit mx-auto lg:mx-0 mb-5"
          >
            <FaPaw /> Open for Adoption
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            A Pet is Waiting. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-warning to-amber-500 bg-clip-text text-transparent">
              Maybe Yours.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg text-foreground-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
          >
            We connect people with pets that need a home — not a shelter cage.
            Browse available animals, schedule a visit, and talk to the guardian
            directly. No middlemen, no waiting forever.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link href="/all_pets">
              <Button
                radius="full"
                size="lg"
                className="bg-warning/20 font-semibold text-warning"
              >
                Browse Pets
              </Button>
            </Link>
            <Link href="/dashboard/my_listing">
              <Button
                variant="outline"
                radius="full"
                size="lg"
                className="text-warning"
              >
                List a Pet
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5 grid grid-cols-12 gap-4 relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="col-span-7 aspect-[3/4] rounded-2xl overflow-hidden bg-default-100 border border-divider shadow-md relative group">
            <Image
              fill
              src="/dogimage3.png"
              alt="Golden retriever up for adoption"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="col-span-5 flex flex-col gap-4 justify-between">
            <div className="aspect-square rounded-2xl overflow-hidden bg-default-100 border border-divider shadow-sm relative group">
              <Image
                fill
                src="/catimage1.png"
                alt="Cat available for adoption"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-default-100 border border-divider shadow-sm relative group">
              <Image
                fill
                src="/dogimage1.png"
                alt="French bulldog puppy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
            className="absolute -bottom-4 -left-4 md:-left-8 bg-background/90 backdrop-blur-md border border-divider rounded-2xl p-4 shadow-xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center text-warning text-xl">
              <FaPaw />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">1,200+</p>
              <p className="text-xs text-foreground-500 font-medium">
                Pets Adopted
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
