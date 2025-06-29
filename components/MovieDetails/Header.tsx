"use client";

import { Movie } from "@/types";
import React from "react";
import FavoriteButton from "./FavoriteButton";

const Header = ({ movie }: { movie: Movie }) => {
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : "-";

  return (
    <div className="flex flex-wrap gap-3 justify-between w-full mb-5 animate-fade-in">
      <h1 className="text-3xl font-bold mb-1 flex items-center flex-wrap gap-2 text-white">
        {movie.title}
        <span className="ml-2 text-lg text-gray-400 font-normal">
          ({releaseYear})
        </span>
      </h1>
      <FavoriteButton movie={movie} />
    </div>
  );
};

export default Header;
