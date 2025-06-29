// import FavoriteMovies from "@/components/Movies/FavoriteMovies";
import Hero from "@/components/Hero/Hero";
import MovieList from "@/components/Movies/MovieList";
import { searchMovies } from "@/services/tmdb";
import FavoriteMovies from "@/components/Movies/FavoriteMovies";
import dynamic from "next/dynamic";
import { Movie } from "@/types";

// lazy loading for featured and tending movies as user usually search directly
const FeaturedMovies = dynamic(
  () => import("@/components/Movies/FeaturedMovies"),
  {
    loading: () => <p className="text-gray-500">Loading featured movies...</p>,
  }
);

const TrendingMovies = dynamic(
  () => import("@/components/Movies/TrendingMovies"),
  {
    loading: () => <p className="text-gray-500">Loading trending...</p>,
  }
);

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>; // search params
}) {
  const params = await searchParams;
  const rawQuery = params?.query;
  const query = typeof rawQuery === "string" ? rawQuery.trim() : "";
  let movies: Movie[];
  try {
    movies = query ? await searchMovies(query) : []; // call the service to search for the movie (we do not need useEffect here as
    // it is already a server component so it will be rerendered every time the url changes)
  } catch {
    throw new Error("Error fetching movie");
  }

  return (
    <div className="min-h-screen bg-[#0b0c0f]">
      {/* Hero Section */}
      <Hero query={query} />
      {/* Movies*/}
      {query ? (
        <section className="movie-section">
          <h2 className="text-gray-300 text-2xl font-bold">
            Results for: <span className="text-[#1ce783]">{query}</span>
          </h2>
          <MovieList movies={movies} query={query} />
        </section>
      ) : (
        <>
          <section className="movie-section">
            <h2 className="movie-section-title">Favorite Movies</h2>
            <FavoriteMovies />
          </section>
          <section className="movie-section">
            <h2 className="movie-section-title">Featured Movies</h2>
            <FeaturedMovies />
          </section>

          <section className="max-w-6xl mx-auto p-4 flex flex-col gap-6 min-h-[400px]">
            <h2 className="text-[#1ce783] text-2xl font-bold">
              Trending This Week
            </h2>
            <TrendingMovies />
          </section>
        </>
      )}
    </div>
  );
}
