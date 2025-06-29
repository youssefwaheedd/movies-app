"use client";

import { Movie } from "@/types";
import Image from "next/image";
import React from "react";

const PosterImage = ({ poster_path, title }: Movie) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400${poster_path}`
    : "/assets/images/not_found.jpeg";

  return (
    <div className="flex-shrink-0 flex justify-center items-center lg:mr-8 lg:mb-4">
      <Image
        src={posterUrl}
        alt={title}
        width={300}
        height={450}
        priority={true} // need better LCP
        sizes="(max-width: 768px) 200px, 300px"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aH"
        className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default PosterImage;
