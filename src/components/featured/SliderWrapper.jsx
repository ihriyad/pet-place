"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPaw,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SliderWrapper = ({ pets }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  if (!pets || pets.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-dots",
          bulletClass:
            "swiper-pagination-bullet !w-2 !h-2 !bg-default-300 opacity-100 transition-all duration-300",
          bulletActiveClass: "!w-8 !bg-warning !rounded-full",
        }}
        className="w-full aspect-16/10 sm:aspect-video rounded-3xl overflow-hidden border border-divider shadow-lg bg-default-100"
      >
        {pets.map((pet, idx) => (
          <SwiperSlide key={pet._id || idx} className="relative w-full h-full">
            <Image
              height={200}
              width={200}
              src={pet.imageUrl}
              alt={pet.petName}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />

            <AnimatePresence mode="wait">
              {activeIndex === idx && (
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute bottom-0 inset-x-0 p-6 md:p-12 text-white z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-4xl font-black tracking-tight">
                        {pet.petName}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-warning text-black text-xs font-bold uppercase tracking-wider">
                        {pet.breed}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs md:text-sm text-default-300 mb-4">
                      <FaMapMarkerAlt className="text-warning" />
                      <span>{pet.location}</span>
                      <span>•</span>
                      <span className="text-warning font-semibold">
                        {pet.age}
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-default-200 line-clamp-2 font-medium leading-relaxed">
                      {pet.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <Link href={`/pets/${pet._id}`}>
                      <Button
                        color="warning"
                        size="lg"
                        radius="full"
                        className="font-bold bg-warning text-black shadow-xl shadow-warning/10 h-12 px-6"
                      >
                        Adopt Now
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center mt-6 px-2">
        <div className="custom-dots flex gap-2" />

        <div className="flex gap-3">
          <Button
            variant="bordered"
            radius="full"
            className="custom-prev border-divider hover:bg-default-100 text-foreground"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </Button>
          <Button
            variant="bordered"
            radius="full"
            className="custom-next border-divider hover:bg-default-100 text-foreground"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SliderWrapper;
