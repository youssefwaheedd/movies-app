// import FavoriteMovies from "@/components/Movies/FavoriteMovies";
import Hero from "@/components/Hero/Hero";
import MovieList from "@/components/Movies/MovieList";
import { searchMovies } from "@/services/tmdb";
import FeaturedMovies from "@/components/Movies/FeaturedMovies";
import FavoriteMovies from "@/components/Movies/FavoriteMovies";
import TrendingMovies from "@/components/Movies/TrendingMovies";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const rawQuery = params?.query;
  const query = typeof rawQuery === "string" ? rawQuery.trim() : "";

  const movies = query ? await searchMovies(query) : [];

  return (
    <main className="min-h-screen bg-[#0b0c0f]">
      {/* Hero Section */}
      <Hero query={query} />
      {/* Movies*/}
      {query ? (
        <section className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
          <strong className="text-gray-300 text-2xl ">
            Results for: <span className="text-green-500">{query}</span>
          </strong>
          <MovieList movies={movies} query={query} />
        </section>
      ) : (
        <>
          <div className="max-w-6xl mx-auto p-4 flex flex-col gap-6">
            <strong className="text-green-500 text-2xl ">
              Favorite Movies
            </strong>
            <FavoriteMovies />
          </div>
          <div className="max-w-6xl mx-auto p-4 flex flex-col gap-6 mb-6">
            <strong className="text-green-500 text-2xl ">
              Featured Movies
            </strong>
            <FeaturedMovies />
          </div>

          <div className="max-w-6xl mx-auto p-4 flex flex-col gap-6">
            <strong className="text-green-500 text-2xl ">
              Trending This Week
            </strong>
            <TrendingMovies />
          </div>
        </>
      )}
    </main>
  );
}
