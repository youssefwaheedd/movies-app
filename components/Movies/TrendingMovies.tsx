import { getTrendingMovies } from "@/services/tmdb";
import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@/types";

const TrendingMovies = async () => {
  let trendingMovies: Movie[];
  try {
    trendingMovies = await getTrendingMovies();
  } catch {
    throw new Error("Error fetching trending movies");
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {trendingMovies.map((movie: Movie, index: number) => (
        <MovieCard key={movie.id} {...movie} priority={index < 2} />
      ))}
    </div>
  );
};

export default TrendingMovies;
