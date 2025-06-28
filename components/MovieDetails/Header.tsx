"use client";

import { Movie } from "@/types";
import React from "react";
import FavoriteButton from "./FavoriteButton";
import { motion } from "framer-motion";

const Header = ({ movie }: { movie: Movie }) => {
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : "-";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-3 justify-between w-full mb-5"
    >
      <h1 className="text-3xl font-bold mb-1 flex items-center flex-wrap gap-2 text-white">
        {movie.title}
        <span className="ml-2 text-lg text-gray-400 font-normal">
          ({releaseYear})
        </span>
      </h1>
      <FavoriteButton movie={movie} />
    </motion.div>
  );
};

export default Header;
