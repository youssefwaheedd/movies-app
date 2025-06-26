import MovieList from "@/components/MovieList";
import SearchInput from "@/components/SearchInput";
import { searchMovies } from "@/services/tmdb";

export default async function Page(props: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchParams = await props.searchParams;
  const rawQuery = searchParams?.query;
  const query = typeof rawQuery === "string" ? rawQuery.trim() : "";

  const movies = query ? await searchMovies(query) : [];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Movies</h1>
      <SearchInput initialQuery={query || ""} />
      <MovieList movies={movies} query={query} />
    </main>
  );
}
