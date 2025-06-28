import { getTrendingMovies } from "@/services/tmdb";
import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@/types";

const TrendingMovies = async () => {
  const trendingMovies = await getTrendingMovies();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {trendingMovies.map((movie: Movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default TrendingMovies;
