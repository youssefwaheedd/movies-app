import { MovieCardProps } from "@/types";
import MovieCard from "./MovieCard";

export default function MovieList({
  movies,
  query,
}: {
  movies: MovieCardProps[];
  query?: string;
}) {
  if (query && movies.length === 0) {
    return (
      <p className="text-gray-500 italic">No results found for :{query}</p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
