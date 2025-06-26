import { notFound } from "next/navigation";
import Image from "next/image";
import { getMovieDetails } from "@/services/tmdb";
import { Movie } from "@/types";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;

  if (!id) return notFound();

  let movie: Movie | null = null;

  try {
    movie = await getMovieDetails(id);
  } catch {
    return notFound();
  }

  if (!movie) return notFound();

  return (
    <div className="p-4">
      {movie.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          width={1280}
          height={720}
          className="rounded-lg w-full max-h-[400px] object-cover mb-4"
        />
      )}

      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-600 italic mb-4">{movie.overview}</p>

      <ul className="text-sm text-gray-700 space-y-1">
        <li>
          <strong>Release Date:</strong> {movie.release_date}
        </li>
        <li>
          <strong>Runtime:</strong> {movie.runtime} mins
        </li>
        <li>
          <strong>Rating:</strong> ⭐ {movie.vote_average}
        </li>
        <li>
          <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
        </li>
        <li>
          <strong>Director:</strong>{" "}
          {movie.credits.crew.find((p) => p.job === "Director")?.name}
        </li>
        <li>
          <strong>Top Cast:</strong>{" "}
          {movie.credits.cast
            .slice(0, 5)
            .map((a) => a.name)
            .join(", ")}
        </li>
      </ul>
    </div>
  );
}
