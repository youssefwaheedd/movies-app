import { getFeaturedMovies } from "@/services/tmdb";
import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@/types";

const FeaturedMovies = async () => {
  const featuredMovies = await getFeaturedMovies();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {featuredMovies.map((movie: Movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default FeaturedMovies;
