import { notFound } from "next/navigation";
import { getMovieDetails } from "@/services/tmdb";
import { Movie } from "@/types";
import MovieDetails from "@/components/MovieDetails/MovieDetails";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) return notFound(); // rollback to not found in case of any errors caused by the id

  let movie: Movie | null = null;

  try {
    movie = await getMovieDetails(id);
  } catch {
    return notFound();
  }

  if (!movie) return notFound();

  return <MovieDetails movie={movie} />;
}
