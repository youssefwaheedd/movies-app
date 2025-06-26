export async function getMovieDetails(id: string) {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/movie/${id}?append_to_response=credits`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );

  if (res.status === 404) throw new Error("Not found");
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export async function searchMovies(query: string) {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to search movies");
  const data = await res.json();
  return data.results;
}

export async function getPopularMovies() {
  const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch popular movies");
  const data = await res.json();
  return data.results;
}
