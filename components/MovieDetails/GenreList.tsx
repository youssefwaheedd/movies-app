"use client";

import { Genre } from "@/types";
import React from "react";
import { motion } from "framer-motion";

const GenreList = ({ genres }: { genres: Genre[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-2 mb-4"
    >
      {genres.map((genre) => (
        <span
          key={genre.id}
          className="bg-[#1ce783] text-[#0b0c0f] px-2 py-1 rounded-full text-xs font-semibold"
        >
          {genre.name}
        </span>
      ))}
    </motion.div>
  );
};

export default GenreList;
