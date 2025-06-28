"use client";

import { Movie } from "@/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const PosterImage = ({ poster_path, title }: Movie) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/assets/images/not_found.jpeg";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex-shrink-0 flex justify-center items-center lg:mr-8 lg:mb-4"
    >
      <Image
        src={posterUrl}
        alt={title}
        width={300}
        height={450}
        className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
      />
    </motion.div>
  );
};

export default PosterImage;
