"use client";

import { Genre } from "@/types";
import React from "react";

const GenreList = ({ genres }: { genres: Genre[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {genres.map((genre) => (
        <span
          key={genre.id}
          className="bg-[#1ce783] text-[#0b0c0f] px-2 py-1 rounded-full text-xs font-semibold"
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default GenreList;
