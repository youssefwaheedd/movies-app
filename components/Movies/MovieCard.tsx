"use client";

import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  priority = false,
}: Movie & { priority?: boolean }) {
  const posterSrc = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : "/assets/images/not_found.jpeg";

  return (
    <div className="animate-fade-in">
      <Link
        href={`/movie/${id}`}
        className="rounded-lg flex flex-col shadow-lg p-2 hover:scale-105 transition-transform duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ce783] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0f]"
        aria-label={`View details for ${title}`}
      >
        <div className="w-full aspect-[2/3] relative">
          <Image
            src={posterSrc}
            alt={`Movie poster for ${title}`}
            fill
            priority={priority} // to improve the LCP (make the ones with index <2 set to true)
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw" // chatgpt generated to optimize the images and improve performance
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aH" // fallback when priority is false (lazy loading)
            className="rounded object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold mt-2 overflow-hidden whitespace-nowrap text-ellipsis w-full text-gray-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400">Released: {release_date}</p>
        <p
          className="text-yellow-500 font-bold"
          aria-label={`Rating: ${vote_average} out of 10`}
        >
          ⭐ {vote_average}
        </p>
      </Link>
    </div>
  );
}
