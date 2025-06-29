import { getFeaturedMovies } from "@/services/tmdb";
import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@/types";

const FeaturedMovies = async () => {
  let featuredMovies: Movie[];
  try {
    featuredMovies = await getFeaturedMovies();
  } catch {
    throw new Error("Error fetching features movies");
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {featuredMovies.map((movie: Movie, index: number) => (
        <MovieCard key={movie.id} {...movie} priority={index < 2} />
      ))}
    </div>
  );
};

export default FeaturedMovies;
