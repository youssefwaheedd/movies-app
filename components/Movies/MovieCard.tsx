"use client";

import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MovieCard({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
}: Movie) {
  const posterSrc = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/assets/images/not_found.jpeg";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/movie/${id}`}
        className="rounded-lg flex flex-col shadow-lg p-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        <div className="w-full aspect-[2/3] relative">
          <Image
            src={posterSrc}
            alt={title}
            fill
            className="rounded object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold mt-2 overflow-hidden whitespace-nowrap text-ellipsis w-full text-gray-300">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{release_date}</p>
        <p className="text-yellow-500 font-bold">⭐ {vote_average}</p>
      </Link>
    </motion.div>
  );
}
